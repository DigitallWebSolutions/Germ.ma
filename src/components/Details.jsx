import { BookOpen, Award, Briefcase, GraduationCap } from 'lucide-react';
import config from '../config.json';

function Details() {
  const sections = [
    {
      icon: BookOpen,
      title: 'ملفات اللغة والتخصصات',
      items: config.sections.languageFiles,
      color: 'bg-blue-500',
    },
    {
      icon: GraduationCap,
      title: 'القواعد والدورات',
      items: config.sections.grammarAndCourses,
      color: 'bg-green-500',
    },
    {
      icon: Briefcase,
      title: 'ملفات العمل والتقديم',
      items: config.sections.careerFiles,
      color: 'bg-red-500',
    },
  ];

  return (
    <section className="bg-gray-100 px-4 py-8">
      <div className="max-w-md mx-auto animate-section">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
          {config.bundle.goldFileTitle}
        </h3>
        <p className="text-sm text-gray-600 text-center mb-8">
          {config.bundle.extraFilesText}
        </p>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`${section.color} text-white p-3 rounded-xl`}>
                  <section.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900">{section.title}</h4>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 mt-1">●</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Award size={32} />
            <h4 className="text-xl font-bold">{config.exams.title}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {config.exams.list.map((exam, index) => (
              <span
                key={index}
                className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold"
              >
                {exam}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
