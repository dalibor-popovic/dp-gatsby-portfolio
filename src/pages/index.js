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
      <Hero theme={theme} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Dalibor Popovic</title>;
