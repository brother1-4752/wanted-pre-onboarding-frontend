import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Layout({ children }: Props) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  width: 600px;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid black;
  border-radius: 15px;
`;

export default Layout;
