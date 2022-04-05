import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'El Framework de React.js para Producción',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Organiza tu código con Next.js el cual cuenta con las herramientas de desarrollo 
        más completas para JavaScript y React.JS. También, podrás implementar cualquier 
        aplicación frontend en la plataforma de Vercel.   
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
