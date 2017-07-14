import '@storybook/addon-actions/register';
import '@storybook/addon-knobs/register'

// Brand.ai integration
import '@storybook/react/addons';
import register from 'brandai-storybook';
register({ dataUrl:'https://assets.brand.ai/hungrysquirrel/t-2-ui-kit/style-data.json?exportFormat=list&key=r1OLNVOQW' });