import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			logo: {
              src: './src/assets/lil-logo.png', 
			},
			sidebar: [
				{
					label: 'Overview',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Authentication',
					autogenerate: { directory: 'authentication' },
				},
				{
					label: 'License Management',
					autogenerate: { directory: 'license-management' },
				},
				{
					label: 'Integrations',
					autogenerate: { directory: 'integrations' },
				},
				{
					label: 'Groups',
					autogenerate: { directory: 'group-management' },
				},
				{
					label: 'Managing Attributes',
					autogenerate: { directory: 'attribute-management' },
				},
				{
					label: 'FAQs',
					autogenerate: { directory: 'faq' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
