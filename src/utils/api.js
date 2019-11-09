// https://codeburst.io/error-handling-in-spa-applications-e94c4ecebd86
/*
Errors in the front-end application fall into a few categories:

Server errors.
These are errors returned by the API and include fatal errors, request errors and logic errors.

Network errors.
These errors occur when the API is not accessible or when a chunk of code cannot be loaded when code splitting is used.

Routing errors.
These errors indicate that the URL in the browser is invalid and cannot be mapped to a valid route.

Authorization errors.
These errors occur when the user is not authenticated or doesn’t have access to the given page or data.

Form validation errors.
These errors are displayed when some value entered by the user is invalid.

Fatal errors.
Other kinds of errors that are usually the result of a programmer’s error in the application code fall into this category.
 */

const Reason = {
  APIError: 1,
  PageNotFound: 2,
  Unauthorized: 3,
  Forbidden: 4,
  NetworkError: 5
};

function makeError(message, reason, innerStack = null, status = null) {
  const error = new Error(message);
  error.reason = reason;
  error.innerStack = innerStack;
  error.status = status;
  return error;
}

function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    fetch(apiBaseURL + url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        response
          .json()
          .then(({ result, error, stack }) => {
            if (error != null) {
              // (1)
              reject(makeError(error, Reason.APIError, stack, response.status));
            } else if (!response.ok) {
              // (2)
              reject(
                makeError(
                  'Invalid server response',
                  Reason.APIError,
                  null,
                  response.status
                )
              );
            } else {
              // (3)
              resolve(result);
            }
          })
          .catch(error => {
            // (4)
            reject(
              makeError(
                'Invalid server response',
                Reason.APIError,
                error.stack,
                response.status
              )
            );
          });
      })
      .catch(error => {
        // (5)
        reject(makeError('Network error', Reason.NetworkError, error.stack));
      });
  });
}

export default post;
