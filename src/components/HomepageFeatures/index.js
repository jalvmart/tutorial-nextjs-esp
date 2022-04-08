import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import FrameworkImageUrl from '@site/static/img/framework-800.jpg';
import ProductividadImageUrl from '@site/static/img/Productividad-800.jpg';
import SDKNextjsVercelImageUrl from '@site/static/img/SDK-Nextjs-Vercel-800.jpg';

const FeatureList = [
  {
    title: 'El Framework de React.js para Producción',   
    Jpg:  FrameworkImageUrl,    
    description: (      
      <>
        Next.js te proporciona la estructura base para estructurar, organizar y 
        desarrollar tu software con todas las funciones que necesitas para 
        la producción. Acelera hoy mismo este proceso de desarrollo hasta 
        la implementación final.
      </>
    ),
  },
  {
    title: 'Aumenta tu Productividad desde la primera etapa del desarrollo',
    Jpg: ProductividadImageUrl,    
    description: (
      <>
        Con Next.js pasar del desarrollo a la producción es un tarea sin 
        complicaciones. Aumenta tu productividad y deja que Next.js compile, 
        empaquete, minimice y divida el código por ti.  
      </>
    ),
  },
  {
    title: 'Utiliza el Kit de Desarrollo de Software más completo',
    Jpg: SDKNextjsVercelImageUrl,    
    description: (
      <>
        Organiza tu código con Next.js el cual cuenta con las herramientas de desarrollo 
        más completas para JavaScript y React.JS. También, podrás implementar cualquier 
        aplicación frontend en la plataforma de Vercel.   
      </>
    ),
  },
];

function Feature({Svg, Jpg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">         
        <img src={Jpg} />       
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
