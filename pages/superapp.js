import PageMeta from '../comps/Common/head';
import Navbar from '~/../../comps/Navbar';
import Milestones from '../comps/About/milestone';
import SuperAppPage from '~/../../comps/SuperAppPage';

function SuperApp() {
  return (
    <div>
      <PageMeta
        title="Gojek Tech"
        description="Gojek is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire."
      />
      <Navbar whiteNav />
      <SuperAppPage />
    </div>
  );
}

export default SuperApp;
