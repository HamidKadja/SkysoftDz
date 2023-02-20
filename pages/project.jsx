import Head from 'next/head';
import styled from 'styled-components';

import SupportBrand from '@/Comps/Home/SupportBrand';
import Testimonials from '@/Comps/Home/Testimonials';
import FourthSection from '@/Comps/Home/fourthSection';
import SecondSection from '@/Comps/Home/secondSection';
import PageHeader from '@/Comps/Page_Header';
import AboutProject from '@/Comps/Project/About_Project';
import LatestProject from '@/Comps/Project/Latest_Project';
import { LanguageSelector } from '@/utils/context';

const Spacer = styled.div`
  width: 1px;
  height: 100px;
`;

function Project() {
  const Title = LanguageSelector('مشروع', 'Projects');

  return (
    <div>
      <Head>
        <title>{Title} | SkyOffice Alger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageHeader Title={Title} ImageUrl="/projects_header.webp" />
        <Spacer />
        <AboutProject />
        <LatestProject />
        <FourthSection />
        <SecondSection />
        <Testimonials />
        <SupportBrand />
      </main>
    </div>
  );
}

export default Project;