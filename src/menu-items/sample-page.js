// THIRD - PARTY
import { FormattedMessage } from 'react-intl';

// ASSETS
import { DocumentCode2 } from 'iconsax-react';

// ICONS
const icons = {
  samplePage: DocumentCode2
};

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const samplePage = {
  id: 'sample-page',
  title: <FormattedMessage id="sample-page" />,
  type: 'group',
  url: '/sample-page',
  icon: icons.samplePage
};

export default samplePage;
