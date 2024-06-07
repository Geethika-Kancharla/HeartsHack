import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 h-screen">
      <header className="bg-green-500 text-white py-5">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center">Welcome to Cardiac Health Hub</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section id="articles">
          <h2 className="my-4 text-2xl font-semibold" style={{ fontSize: "30px", fontWeight: "bold" }}>Cardiac Health Articles</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Article 1: Common Cardiac Diseases */}
            <div className="card bg-white shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold mb-2">Common Cardiac Diseases</h3>
                <hr className="my-4 border-t-2 border-gray-500" />
                <div className="card-text rounded-md">
                  <h4 className="text-lg font-semibold mb-1 rounded-md">1. Coronary Artery Disease (CAD)</h4>
                  <p>Coronary Artery Disease is the most common type of heart disease. It occurs when the coronary arteries become narrow or blocked, reducing blood flow to the heart.</p>
                </div>
              </div>
            </div>
            {/* Article 2: Heart Failure */}
            <div className="card bg-white shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold mb-2">2. Heart Failure</h3>
                <p className="card-text">Heart failure occurs when the heart is unable to pump blood effectively, leading to a buildup of fluid in the lungs and other parts of the body.</p>
              </div>
            </div>
            {/* Article 3: Arrhythmia */}
            <div className="card bg-white shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold mb-2">3. Arrhythmia</h3>
                <p className="card-text">Arrhythmia refers to an irregular heartbeat. It can be too fast, too slow, or irregular, affecting the heart's ability to pump blood effectively.</p>
              </div>
            </div>
            {/* Article 4: Valvular Heart Disease */}
            <div className="card bg-white shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">4. Valvular Heart Disease</h3>
                <p className="card-text">Valvular heart disease occurs when one or more of the heart valves do not function properly, which can affect blood flow through the heart.</p>
              </div>
            </div>
            {/* Article 5: Hypertrophic Cardiomyopathy */}
            <div className="card bg-white shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">5. Hypertrophic Cardiomyopathy</h3>
                <p className="card-text">Hypertrophic cardiomyopathy is a condition in which the heart muscle thickens, making it harder for the heart to pump blood.</p>
              </div>
            </div>
            {/* Article 6: Congenital Heart Disease */}
            <div className="card bg-white shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">6. Congenital Heart Disease</h3>
                <p className="card-text">Congenital heart disease is a condition that occurs at birth, affecting the structure and function of the heart.</p>
              </div>
            </div>
            {/* Article 7: Atrial Fibrillation */}
            <div className="card bg-white shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">7. Atrial Fibrillation</h3>
                <p className="card-text">Atrial fibrillation is an irregular and often rapid heart rate that can increase the risk of stroke, heart failure, and other heart-related complications.</p>
              </div>
            </div>
            {/* Article 8: Peripheral Artery Disease (PAD) */}
            <div className="card bg-white shadow-md">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">8. Peripheral Artery Disease (PAD)</h3>
                <p className="card-text">Peripheral artery disease is a common circulatory problem in which narrowed arteries reduce blood flow to the limbs.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="symptoms-prevention">
          <h2 className="my-4" style={{ fontSize: "30px", fontWeight: "bold" }}>Symptoms and Preventive Measures</h2>
          <div className="flex flex-wrap">
            {/* Symptom 1: Chest pain */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="w-full p-2">
                <div className="rounded-lg overflow-hidden bg-white shadow-md">
                  <div className="p-4">
                    <h3 className="font-bold">Chest pain or discomfort</h3>
                    <p>Coronary Artery Disease is the most common type of heart disease. It occurs when the coronary arteries become narrow or blocked, reducing blood flow to the heart.</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 flex justify-center items-center">
                <img src="/assets/symptom1.jpeg" alt="Chest pain or discomfort" className="symptom-image h-48 w-auto" />
              </div>

            </div>

            {/* Symptom 2: Shortness of breath */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="w-full p-2">
                <div className="rounded-lg overflow-hidden bg-white shadow-md">
                  <div className="p-4">
                    <h3 className="font-bold">Shortness of breath</h3>
                    <p>Heart failure occurs when the heart is unable to pump blood effectively, leading to a buildup of fluid in the lungs and other parts of the body.</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 flex justify-center items-center">
                <img src="/assets/symptom2.jpeg" alt="Shortness of breath" className="symptom-image h-48 w-auto" />
              </div>
            </div>

            {/* Symptom 3: Fatigue and weakness */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="w-full p-2">
                <div className="rounded-lg overflow-hidden bg-white shadow-md">
                  <div className="p-4">
                    <h3 className="font-bold">Fatigue and weakness</h3>
                    <p>Fatigue and weakness are common symptoms of various cardiac diseases.</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 flex justify-center items-center">
                <img src="/assets/symptom3.png" alt="Fatigue and weakness" className="symptom-image h-48 w-auto" />
              </div>

            </div>

            {/* Symptom 4: Irregular heartbeat */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="w-full p-2">
                <div className="rounded-lg overflow-hidden bg-white shadow-md">
                  <div className="p-4">
                    <h3 className="font-bold">Irregular heartbeat</h3>
                    <p>Irregular heartbeat or arrhythmia affects the heart's ability to pump blood effectively.</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 flex justify-center items-center">
                <img src="/assets/symptom4.jpeg" alt="Irregular heartbeat" className="symptom-image h-48 w-auto" />
              </div>

            </div>

            {/* Symptom 5: Lightheadedness or fainting */}
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="w-full p-2">
                <div className="rounded-lg overflow-hidden bg-white shadow-md">
                  <div className="p-4">
                    <h3 className="font-bold">Lightheadedness or fainting</h3>
                    <p>Lightheadedness or fainting can be symptoms of cardiac issues and should be evaluated by a healthcare professional.</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-2 flex justify-center items-center">
                <img src="/assets/symptom5.png" alt="Lightheadedness or fainting" className="symptom-image h-48 w-auto" />
              </div>

            </div>
          </div>
          {/* Preventive Measures */}
          <div className="card bg-white shadow-md mt-8">
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold" style={{ fontSize: "30px", fontWeight: "bold" }}>Preventive Measures for Cardiac Diseases</h3>
              <div className="flex flex-wrap">
                {/* Measure 1 */}
                <div className="w-full md:w-1/2 flex flex-col mb-4">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md p-4">
                    <p className="list-item mb-2">1. Maintain a healthy diet low in saturated fats, cholesterol, and sodium</p>
                    <div className="w-60 h-60">
                      <img src="/assets/1.webp" alt="Healthy diet" className="img-fluid object-cover w-full h-full" />
                    </div>
                  </div>
                </div>
                {/* Measure 2 */}
                <div className="w-full md:w-1/2 flex flex-col mb-4">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md p-4">
                    <p className="list-item mb-2">2. Exercise regularly to keep the heart strong</p>
                    <div className="w-60 h-60">
                      <img src="/assets/exercise.png" alt="Regular Exercise" className="img-fluid object-cover w-full h-full" />
                    </div>
                  </div>
                </div>
                {/* Measure 3 */}
                <div className="w-full md:w-1/2 flex flex-col mb-4">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md p-4">
                    <p className="list-item mb-2">3. Avoid smoking and limit alcohol consumption</p>
                    <div className="w-60 h-60">
                      <img src="/assets/smoking.jpeg" alt="Avoid Smoking" className="img-fluid object-cover w-full h-full" />
                    </div>
                  </div>
                </div>
                {/* Measure 4 */}
                <div className="w-full md:w-1/2 flex flex-col mb-4">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md p-4">
                    <p className="list-item mb-2">4. Manage stress through relaxation techniques and adequate sleep</p>
                    <div className="w-60 h-60">
                      <img src="/assets/stress.png" alt="Stress Management" className="img-fluid object-cover w-full h-full" />
                    </div>
                  </div>
                </div>
                {/* Measure 5 */}
                <div className="w-full md:w-1/2 flex flex-col mb-4">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md p-4">
                    <p className="list-item mb-2">5. Monitor and control blood pressure, cholesterol, and diabetes</p>
                    <div className="w-65 h-60">
                      <img src="/assets/monitor.jpeg" alt="Monitor and Control Blood Pressure" className="img-fluid object-cover " />
                    </div>
                  </div>
                </div>
                {/* Measure 6 */}
                <div className="w-full md:w-1/2 flex flex-col mb-4">
                  <div className="rounded-lg overflow-hidden bg-white shadow-md p-4">
                    <p className="list-item mb-2">6. Get regular medical check-ups and screenings</p>
                    <div className="w-60 h-60">
                      <img src="/assets/checkup.jpeg" alt="Regular Medical Check-ups" className="img-fluid object-cover w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>







        </section>

        <section id="videos" className="mt-8">
          <h2 className="my-4 text-2xl font-semibold" style={{ fontSize: "40px", fontWeight: "bold" }}>Cardiac Health Videos</h2>

          {/* Video 1: Understanding Coronary Artery Disease */}
          <div className="card bg-white shadow-md">
            <div className="card-body" >
              <h2 className="card-title text-xl  " style={{ fontSize: "30px", fontWeight: "bold" }}>Understanding Coronary Artery Disease</h2><br></br>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/vqaja_LD1Kk"
                  title="Understanding Coronary Artery Disease"
                  allowFullScreen
                  style={{ width: "100%", height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Video 2: What is Heart Failure? */}
          <div className="card bg-white shadow-md">
            <div className="card-body">
              <h2 className="card-title text-xl " style={{ fontSize: "30px", fontWeight: "bold" }}>What is Heart Failure?</h2><br></br>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/GnpLm9fzYxU"
                  title="What is Heart Failure?"
                  allowFullScreen
                  style={{ width: "100%", height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Video 3: Understanding Arrhythmia */}
          <div className="card">
            <div className="card-body">
              <h2 className="card-title" style={{ fontSize: "30px", fontWeight: "bold" }}>Understanding Arrhythmia</h2><br></br>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/RuxKTCv_s0M"
                  title="Understanding Arrhythmia"
                  allowFullScreen
                  style={{ width: "100%", height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Video 4: Heart Valve Disease Explained */}
          <div className="card">
            <div className="card-body">
              <h2 className="card-title" style={{ fontSize: "30px", fontWeight: "bold" }}>Heart Valve Disease Explained</h2><br></br>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/PomqQu0m6Ro"
                  title="Heart Valve Disease Explained"
                  allowFullScreen
                  style={{ width: "100%", height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Video 5: Hypertrophic Cardiomyopathy Overview */}
          <div className="card">
            <div className="card-body">
              <h3 className="card-title" style={{ fontSize: "30px", fontWeight: "bold" }}>Hypertrophic Cardiomyopathy Overview</h3><br></br>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/QC7gwTyH6uM"
                  title="Hypertrophic Cardiomyopathy Overview"
                  allowFullScreen
                  style={{ width: "100%", height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Video 6: Understanding Congenital Heart Disease */}
          <div className="card">
            <div className="card-body">
              <h3 className="card-title" style={{ fontSize: "30px", fontWeight: "bold" }}>Understanding Congenital Heart Disease</h3><br></br>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/eI89jduge3Q"
                  title="Understanding Congenital Heart Disease"
                  allowFullScreen
                  style={{ width: "100%", height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Video 7: Atrial Fibrillation */}
          <div className="card">
            <div className="card-body">
              <h3 className="card-title" style={{ fontSize: "30px", fontWeight: "bold" }}>Atrial Fibrillation</h3><br></br>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/ezTEc6GwLNs"
                  title="Atrial Fibrillation"
                  allowFullScreen
                  style={{ width: "100%", height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>
          {/* Video 8: Peripheral Artery Disease Management */}
          <div className="card">
            <div className="card-body">
              <h3 className="card-title" style={{ fontSize: "30px", fontWeight: "bold" }}>Peripheral Artery Disease Management</h3><br></br>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/3B6jt4nHHmg"
                  title="Peripheral Artery Disease Management"
                  allowFullScreen
                  style={{ width: "100%", height: "500px" }}
                ></iframe>
              </div>
            </div>
          </div>

        </section>


      </main>
    </div>
  );
}

export default About;
