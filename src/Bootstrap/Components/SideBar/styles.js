import styled from 'styled-components';

const SideBar = {
  main: styled.div`
    background: #2C2C2C;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    color: white;
    width: ${props => props.current ? '350px' : '100px'};
    transition: 0.3s;

    height: 100vh;
    position: absolute;
  `,
  handler: styled.div`
  `,
  handlerBtn: styled.button`
    background: #1F201C;
    color: white;
    float: right;
    cursor: pointer;
    border: 0;
    padding: 7px 14px;
    margin: 12px 12px 0 12px;
    font-size: 1rem;
  `
}

export const HandlerButtonCSS = {
  main: styled.div`
  `,
  trigger: styled.button`
    background: #1F201C;
    color: white;
    float: right;
    cursor: pointer;
    border: 0;
    padding: 7px 14px;
    margin: 12px 12px 0 12px;
    font-size: 1rem;
  `
}

export const ItemListCSS = {
  main: styled.ul`
    list-style: none;
    padding: 0;
    border: 0;
    margin: 20px;
  `,
  title: styled.li`
    font-size: 1.3rem;
    padding: 10px 0 15px 0;
  `,
  item: styled.li`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 5px 0;
  `
}

export default SideBar