import React from 'react';
import SectionWrapper from './SectionWrapper';
import ExerciseCard from './ExerciseCard';

export default function Workout({ workout }) {
  return (
    <SectionWrapper id={'workout'} header={'Welcome to '} title={['The', 'danger', 'Zone']}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, exerciseIndex) => {
          return <ExerciseCard exercise={exercise} index={exerciseIndex} key={exerciseIndex} />;
        })}
      </div>
    </SectionWrapper>
  );
}
