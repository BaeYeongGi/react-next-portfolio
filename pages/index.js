import Head from 'next/head'
import Footer from 'components/includes/Footer';
import styled from "styled-components";
import Link from "next/link";

const PortfolioPageList = styled.ul`
  display:flex;
  height:100%;
  align-items:center;
  > li {width:25%; height:100%;
    > a {display:flex; align-items:center; text-align:center; justify-content:center; width:100%; height:100%;}
  }
`;

const Intro = styled.li`
  background-color:rgb(118, 176, 173);
`;

const SelfInterview = styled.li`
  background-color:rgb(155, 130, 129);
`;

const Skills = styled.li`
background-color:rgb(97, 130, 184);
`;

const Portfolio = styled.li`
background-color:rgb(107, 143, 161);
`; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Baeyeonggi's Next Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PortfolioPageList>
        <Intro><Link href="section/Intro" as="Intro">Intro</Link></Intro>
        <SelfInterview><Link href="section/SelfInterview" as="Self-Interview">Self-Interview</Link></SelfInterview>
        <Skills><Link href="section/Skills" as="Skills">Skills</Link></Skills>
        <Portfolio><Link href="section/Portfolio" as="Portfolio">Portfolio</Link></Portfolio>
      </PortfolioPageList> 
    </>
  )
}
