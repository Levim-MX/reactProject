import React from 'react';
import './Home.css'; 
import './app.css'

function Home() {
  return (
    <section className="home">
      <div className="home-text">
      
      <h1>
          كارفكس الوكيل الحصري في العراق لصيانة المركبات
          
        </h1>
        <p>
          خدماتنا تشمل صيانة كافة اجزاء السيارة ,بأحدث الأجهزة وبأيادي محترفة ومتمرسة
        </p>
        <div className="button-box">
          <a href="#services" className="btn">تعرف على خدماتنا</a>
          <a href="#contact" className="btn">تواصل معنا</a>
        </div>
      </div>

    </section>
  );
}

export default Home;