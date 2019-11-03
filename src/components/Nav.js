import React, { useEffect, useRef, useCallback } from 'react';
import UseAnimations from 'react-useanimations';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
// import { Nav } from '../Nav';

const Navmenu = styled.nav`
  position: fixed;
  top: 0;
  left: ${props => (props.navopen ? '0' : '-130px')};
  width: 200px;
  height: 100vh;
  background: #333;
  color: white;
  padding: 1rem;
  text-align: left;
  transition: all 200ms ease-out;
  &:hover .togglemenu {
    background: white;
  }
  ul {
    padding: 0;
    li {
      list-style: none;
      margin: 0.5rem;
    }
  }
`;

export default props => {
  const navopen = useSelector(state => state.navopen);
  const dispatch = useDispatch();
  const node = useRef();

  /* Need useCallback bc useEffect otherwise need evrything inside as a dependency */
  const handleClickOutside = useCallback(
    e => {
      console.log('clicking anywhere');
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      dispatch({ type: 'TOGGLE_MENU' });
    },
    [dispatch]
  );

  const handleChange = selectedValue => {
    // onChange(selectedValue);
    dispatch({ type: 'TOGGLE_MENU' });
  };

  useEffect(() => {
    if (navopen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navopen, handleClickOutside]);

  return (
    <Navmenu ref={node} navopen={navopen}>
      <div onClick={handleChange}>
        <UseAnimations animationKey='menu' className='hamburgericon' />
      </div>
      {props.children}
    </Navmenu>
  );
};
