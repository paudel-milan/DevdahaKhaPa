// src/components/BoardMembers.jsx
import React from 'react';
import styles from './styles/BoardMembers.module.css';
import boardMembersData from '../data/boardMembers.json'; // Import your board members data

export default function BoardMembers() {
  if (boardMembersData.length === 0) {
    return null; // Don't render if no board members
  }

  return (
    <section className={styles.boardMembersSection} aria-labelledby="board-members-heading">
      <div className={styles.container}>
        <h2 id="board-members-heading" className={styles.heading}>
          कार्यसमिति <span className={styles.englishText}>/ Board Members</span>
        </h2>

        <div className={styles.boardGrid}>
          {boardMembersData.map((member) => (
            <article key={member.id} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.designation}`}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberDetails}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberDesignation}>{member.designation}</p>
                {member.bio && <p className={styles.memberBio}>{member.bio}</p>}
              </div>
            </article>
          ))}
        </div>
        {/* Optional: Add a "View All" button if you might have many members and a dedicated page for them */}
        {/* For example:
        {boardMembersData.length > 6 && ( // Only show if more than 6 members
          <div className={styles.viewAllContainer}>
            <a href="/all-board-members" className={styles.viewAllButton}>
              View All Board Members <span className={styles.arrow}>&rarr;</span>
            </a>
          </div>
        )}
        */}
      </div>
    </section>
  );
}