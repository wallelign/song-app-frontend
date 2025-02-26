import { css } from "@emotion/react";

export const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
`;

export const thTdStyle = css`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const addButtonContainerStyle = css`
  display: flex;
  justify-content: flex-end; /* Aligns content to the right */
  margin-bottom: 10px;
`;

export const addButtonStyle = css`
  background-color: black;
  margin-top: 16px;
  margin-right: 65px;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: gray-900;
  }
`;

export const editButtonStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: #007bff;
  transition: color 0.2s ease-in-out;
`;
export const deleteButtonStyle = css`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  color: red;
  transition: color 0.2s ease-in-out;
`;

export const actionButtonStyle = css`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;
