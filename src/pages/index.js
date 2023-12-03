import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { About } from '../components/about';
import { Projects } from '../components/projects';
import { Footer } from '../components/footer';
import { Contact } from '../components/contact';

const getMode = () => {
  return JSON.parse(localStorage.getItem('theme')) || 'light';
};

const IndexPage = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(getMode());
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Layout>
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Dalibor Popovic</title>
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <meta
      name='viewport'
      content='width=device-width,
      initial-scale=1.0'
    />
    <meta charSet='utf-8' />
    <meta name='description' content='Frontend developer' />
    <meta property='og:image' content='favicon-32x32.png' />
    <meta property='og:title' content='Dalibor Popovic' key='ogtitle' />
    <meta property='og:site_name' content='Dalibor Popovic' key='ogsitename' />
    <meta
      property='og:description'
      content='Frontend developer'
      key='ogdescription'
    />
  </>
);
