import { useState, useEffect } from 'react';
import Head from 'next/head';
import Select, { components } from 'react-select';
import fetch from 'isomorphic-unfetch';

import Navbar from '~/../../comps/Navbar';
import bannerImage from '~/../../static/banner.png';
import JobCard from '~/../../comps/Careers/jobCard';

import text from '../../utils/text.json';
import { getServerSideProps } from '../__shared/getServerSideProps.js';

const CommonSelect = (props) => {
  return (
    <div className="col-md-6 col-lg-3 py-3 py-lg-0">
      <Select {...props} />
    </div>
  );
};

export default CommonSelect;
