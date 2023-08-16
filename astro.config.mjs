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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						// { label: 'Example Guide', link: '/guides/example/' },
						{ label: 'LMS365', link: '/guides/lms365/' },
						{ label: 'Workday', link: '/guides/workday/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
