import React from 'react';
import GridItems from '../components/GridItems';
import ThreeGridItems from '../components/ThreeGridItems.tsx';
import itemsArr from '../utils/Items';




const Home: React.FC = () => {
  //className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800" 
  return (
    <section className='flex flex-col sm:px-10 sm:py-8 px-4 py-6 min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-12'>
        <h1 className='text-3xl font-bold'>Welcome to CartDash</h1>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nibh vitae dictum laoreet, dolor lectus porta quam, et lacinia odio justo ac enim. Aenean sed justo a ipsum volutpat lacinia. Nulla facilisi. Sed sit amet libero nec enim dictum dictum. Donec at elit quis odio tincidunt suscipit. Nulla facilisi. Sed et felis ac nisl bibendum egestas at nec lectus.
        </p>
      </div>
      <ThreeGridItems items ={itemsArr}/>
    </section>
  );
};

export default Home;