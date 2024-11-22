import React from 'react';
import Heading from './heading';
import Card from './card';

const data = [
  {
    id: 0,
    title: 'Amazon-Clone',
    desc: 'An HTML and CSS based website clone of Amazon',
    img: '/p1.PNG',
    tags: ['Html', 'Node', 'CSS'],
  },
  {
    id: 1,
    title: 'Static-Resume',
    desc: 'An HTML and CSS based static resume builder',
    img: '/p2.PNG',
    tags: ['Html', 'Node', 'CSS'],
  },
  {
    id: 2,
    title: 'Countdown-Timer',
    desc: 'A React and Typescript based app for countdown of timer',
    img: '/p3.PNG',
    tags: ['React', 'Node', 'Typescript', 'CSS'],
  },
];

const Projects = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] text-white font-extrabold">
      <div className="text-center">
        <Heading title="My Projects" />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {data.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
