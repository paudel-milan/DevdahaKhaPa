// src/components/MajorTasks.jsx
import React from 'react';
import styles from './styles/MajorTasks.module.css';
import majorTasks from '../data/majorTasks.json'; // Import your tasks data

export default function MajorTasks() {
  if (majorTasks.length === 0) {
    return null; // Don't render if no tasks
  }

  return (
    <section className={styles.majorTasksSection} aria-labelledby="major-tasks-heading">
      <div className={styles.container}>
        <h2 id="major-tasks-heading" className={styles.heading}>
          मुख्य कार्यहरू <span className={styles.englishText}>/ Major Tasks</span>
        </h2>

        <div className={styles.tasksScrollWrapper}>
          <div className={styles.tasksContainer}>
            {majorTasks.map((task) => (
              <div key={task.id} className={styles.taskCard}>
                <img
                  src={task.image}
                  alt={task.title}
                  className={styles.taskImage}
                />
                <h3 className={styles.taskTitle}>{task.title}</h3>
                <p className={styles.taskDescription}>{task.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}