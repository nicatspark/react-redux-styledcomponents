import styled from 'styled-components';
// import UseAnimations from 'react-useanimations';

export default styled.button`
  background-color: red;
  border-radius: 2px;
  color: white;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0;
  height: 30px;
  width: 60vw;
  .close {
    position: absolute;
    top: 0.5em;
    right: 0.5em;
  }
`;

// function Bottombar(props) {
//   return (
//     <Drawer>
//       {props.children}
//       <UseAnimations className='close' animationKey='github' />
//     </Drawer>
//   );
// }

// export default Bottombar;
