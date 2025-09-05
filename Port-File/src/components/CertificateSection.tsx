import { ExternalLink, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import javabg from '../assets/projects/java-bg1.jpg';

const CertificateSection = () => {
  const certificates = [
    {
      title: "Full Stack Java Development With React.",
      issuer: "Testing Shastrs / PUNE.",
      date: "2024",
      description: "Comprehensive full stack development program covering Java, Spring Boot, React, and database technologies.",
      skills: ["Java", "Spring Boot", "React", "MySQL", "REST APIs", "Hibernate", "Html", "CSS", "JDBC","Spring"],
      credentialUrl: "https://drive.google.com/file/d/1JVABlS_fHr54rhl2anRIDhBLc0OGrNb2/view?usp=drivesdk",
      image: javabg,
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            My <span className="text-red-500">Certificates</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements in full stack development
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.title}
              className="glassmorphism rounded-lg overflow-hidden hover-glow group transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Certificate Image */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Award className="w-16 h-16 text-red-500" />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                      {certificate.title}
                    </h3>
                    <p className="text-red-400 font-medium">
                      {certificate.issuer} • {certificate.date}
                    </p>
                  </div>
                  <Award className="w-8 h-8 text-red-500 flex-shrink-0" />
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {certificate.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {/* View Certificate Button with Link */}
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </a>

                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Verify
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
