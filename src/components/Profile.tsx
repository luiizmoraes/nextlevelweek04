import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

     const { level } = useContext(ChallengesContext);

     return (
          <div className={styles.profileContainer}>
               <img src="https://github.com/luiizmoraes.png" alt="Foto de perfil. Luiz Moraes" />
               <div>
                    <strong>Luiz Otávio de Moraes</strong>
                    <p>
                         <img src="icons/level.svg" alt="Level" />
                         Level {level}
                    </p>
               </div>
          </div>
     )
}