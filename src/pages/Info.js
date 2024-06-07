import React from 'react';
import './Info.css';

function Info() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Cardiac Health Hub</h1>
      </header>

      <main className="container">
        <section id="articles">
        <h2 className="my-4">Cardiac Health Articles</h2>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Common Cardiac Diseases</h3>
              <div className="card-text">
                <h4>1. Coronary Artery Disease (CAD)</h4>
                <p>Coronary Artery Disease is the most common type of heart disease. It occurs when the coronary arteries become narrow or blocked, reducing blood flow to the heart.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">2. Heart Failure</h4>
              <p className="card-text">Heart failure occurs when the heart is unable to pump blood effectively, leading to a buildup of fluid in the lungs and other parts of the body.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">3. Arrhythmia</h4>
              <p className="card-text">Arrhythmia refers to an irregular heartbeat. It can be too fast, too slow, or irregular, affecting the heart's ability to pump blood effectively.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">4. Valvular Heart Disease</h4>
              <p className="card-text">Valvular heart disease occurs when one or more of the heart valves do not function properly, which can affect blood flow through the heart.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">5. Hypertrophic Cardiomyopathy</h4>
              <p className="card-text">Hypertrophic cardiomyopathy is a condition in which the heart muscle thickens, making it harder for the heart to pump blood.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">6. Congenital Heart Disease</h4>
              <p className="card-text">Congenital heart disease is a condition that occurs at birth, affecting the structure and function of the heart.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">7. Atrial Fibrillation</h4>
              <p className="card-text">Atrial fibrillation is an irregular and often rapid heart rate that can increase the risk of stroke, heart failure, and other heart-related complications.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">8. Peripheral Artery Disease (PAD)</h4>
              <p className="card-text">Peripheral artery disease is a common circulatory problem in which narrowed arteries reduce blood flow to the limbs.</p>
            </div>
          </div>
        </section>
        <section id="symptoms-prevention">
  <h2 className="my-4">Symptoms and Preventive Measures</h2>
  <div className="flex flex-wrap">
    {/* Symptom 1: Chest pain */}
    <div className="flex w-full">
      <div className="w-full md:w-1/2 p-2">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Chest pain or discomfort</h3>
            <p className="card-text">Coronary Artery Disease is the most common type of heart disease. It occurs when the coronary arteries become narrow or blocked, reducing blood flow to the heart.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
        <img src="/assets/symptom1.jpeg" alt="Chest pain or discomfort" className="symptom-image" />
        
      </div>
      <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
        <img src="/assets/symptom12.png" alt="Chest pain or discomfort" className="symptom-image" />
        
      </div>
    </div>

    {/* Symptom 2: Shortness of breath */}
    <div className="flex w-full">
      <div className="w-full md:w-1/2 p-2">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Shortness of breath</h3>
            <p className="card-text">Heart failure occurs when the heart is unable to pump blood effectively, leading to a buildup of fluid in the lungs and other parts of the body.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
        <img src="/assets/symptom2.jpeg" alt="Shortness of breath" className="symptom-image" />
      </div>
      <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
        <img src="/assets/symptom22.png" alt="Shortness of breath" className="symptom-image" />
      </div>
    </div>

    {/* Symptom 3: Fatigue and weakness */}
    <div className="flex w-full">
      <div className="w-full md:w-1/2 p-2">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Fatigue and weakness</h3>
            <p className="card-text">Fatigue and weakness are common symptoms of various cardiac diseases.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
        <img src="/assets/symptom3.png" alt="Fatigue and weakness" className="symptom-image" />
      </div>
      <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
        <img src="/assets/symptom32.webp" alt="Fatigue and weakness" className="symptom-image" />
      </div>
    </div>

    {/* Symptom 4: Irregular heartbeat */}
    <div className="flex w-full">
      <div className="w-full md:w-1/2 p-2">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Irregular heartbeat</h3>
            <p className="card-text">Irregular heartbeat or arrhythmia affects the heart's ability to pump blood effectively.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
        <img src="/assets/symptom4.jpeg" alt="Irregular heartbeat" className="symptom-image" />
      </div>
      <div className="w-full md:w-1/2 p-2 flex justify-center items-center">
        <img src="/assets/symptom42.jpeg" alt="Irregular heartbeat" className="symptom-image" />
      </div>
    </div>

    {/* Symptom 5: Lightheadedness or fainting */}
    <div className="flex w-full">
      <div className="w-full md:w-1/2 p-2">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Lightheadedness or fainting</h3>
            <p className="card-text">Lightheadedness or fainting can be symptoms of cardiac issues and should be evaluated by a healthcare professional.</p>
          </div>
        </div>
      </div>
     <div className="w-full p-2 flex justify-center items-center">
  <img src="/assets/symptom5.png" alt="Lightheadedness or fainting" className="symptom-image mr-10" />
</div>
<div className="w-full p-2 flex justify-center items-center">
  <img src="/assets/symptom52.jpg" alt="Lightheadedness or fainting" className="symptom-image mr-10" />
</div>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">Preventive Measures for Cardiac Diseases</h3>
      <div className="preventive-measures">
        <div className="preventive-measure flex items-center mb-4">
          <img src="/assets/1.webp" className="img-fluid mr-4" />
          <p className="list-item">Maintain a healthy diet low in saturated fats, cholesterol, and sodium</p>
        </div>
        <div className="preventive-measure flex items-center mb-4">
          <img src="/assets/exercise.png" alt="Regular Exercise" className="img-fluid mr-4" />
          <p className="list-item">Exercise regularly to keep the heart strong</p>
        </div>
        <div className="preventive-measure flex items-center mb-4">
          <img src="/assets/smoking.jpeg" alt="Avoid Smoking" className="img-fluid mr-4" />
          <p className="list-item">Avoid smoking and limit alcohol consumption</p>
        </div>
        <div className="preventive-measure flex items-center mb-4">
          <img src="/assets/stress.png" alt="Stress Management" className="img-fluid mr-4" />
          <p className="list-item">Manage stress through relaxation techniques and adequate sleep</p>
        </div>
        <div className="preventive-measure flex items-center mb-4">
          <img src="/assets/monitor.jpeg" alt="Monitor and Control Blood Pressure" className="img-fluid mr-4" />
          <p className="list-item">Monitor and control blood pressure, cholesterol, and diabetes</p>
        </div>
        <div className="preventive-measure flex items-center mb-4">
          <img src="/assets/checkup.jpeg" alt="Regular Medical Check-ups" className="img-fluid mr-4" />
          <p className="list-item">Get regular medical check-ups and screenings</p>
        </div>
      </div>
    </div>
  </div>
</section>


        <section id="videos">
          <h2 className="my-4">Cardiac Health Videos</h2>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Understanding Coronary Artery Disease</h3>
              <div className="video">
                <iframe src="https://www.youtube.com/embed/vqaja_LD1Kk" title="Understanding Coronary Artery Disease" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">What is Heart Failure?</h3>
              <div className="video">
                <iframe src="https://www.youtube.com/embed/GnpLm9fzYxU" title="What is Heart Failure?" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Understanding Arrhythmia</h3>
              <div className="video">
                <iframe src="https://www.youtube.com/embed/RuxKTCv_s0M" title="Understanding Arrhythmia" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Heart Valve Disease Explained</h3>
              <div className="video">
                <iframe src="https://www.youtube.com/embed/PomqQu0m6Ro" title="Heart Valve Disease Explained" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Hypertrophic Cardiomyopathy Overview</h3>
              <div className="video">
                <iframe src="https://www.youtube.com/embed/QC7gwTyH6uM" title="Hypertrophic Cardiomyopathy Overview" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Understanding Congenital Heart Disease</h3>
              <div className="video">
                <iframe src="https://www.youtube.com/embed/eI89jduge3Q" title="Understanding Congenital Heart Disease" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Atrial Fibrillation</h3>
              <div className="video">
                <iframe src="https://www.youtube.com/embed/ezTEc6GwLNs" title="Atrial Fibrillation" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Peripheral Artery Disease Management</h3>
              <div className="video">
                <iframe src="https://www.youtube.com/embed/3B6jt4nHHmg" title="Peripheral Artery Disease Management" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Info;
