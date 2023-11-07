import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:import.meta.env.VITE_APP_SANITY_PROJECT_ID ,
    dataset: 'production',
    apiVersion:'1',
    token:import.meta.env.VITE_APP_SANITY_TOKEN,
    useCdn: true, 
  });

const builder =imageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source)
