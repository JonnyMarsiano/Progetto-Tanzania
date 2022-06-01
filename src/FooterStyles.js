import styled from 'styled-components';

export const Box = styled.div`
margin-top: 10rem;
padding: 40px 20px;
background: #000000;
position: relative;
bottom: 0;
width: 100%;
border-style: solid;
border-width: 0px;
border-top-color: #FCD20E;
border-top-width: 15px;
@media only screen and (max-width: 600px) {
	padding: 30px 0px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;

@media only screen and (max-width: 600px) {
	margin-left: 40px;
}
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #18B637;
margin-bottom: 40px;
font-weight: bold;
`;