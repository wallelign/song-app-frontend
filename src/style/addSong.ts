import styled from "@emotion/styled";
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 0 auto; /* Centers the form */
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #1f2937; /* gray-900 */
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  color: #1f2937; /* gray-900 */
  background-color: #f9fafb; /* gray-50 */
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 8px;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #3b82f6; /* blue-500 */
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #3b82f6; /* blue-500 */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #2563eb; /* blue-600 */
  }
`;
