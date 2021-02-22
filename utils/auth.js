import Router from 'next/router';

export const auth = (ctx) => {
  if (typeof window === 'undefined') {
    ctx.res.writeHead(302, { Location: '/jobs/all' });
    ctx.res.end();
  } else {
    Router.push('/jobs/all');
  }
};
