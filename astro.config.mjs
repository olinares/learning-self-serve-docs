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
			social: {
				github: 'https://github.com/olinares/learning-self-serve-docs',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'How To Guides',
					items: [
						{ label: 'LMS365', link: '/guides/lms365/' },
						{ label: 'Workday', link: '/guides/workday/' },
					],
				},
				{
					label: 'Benefits',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
