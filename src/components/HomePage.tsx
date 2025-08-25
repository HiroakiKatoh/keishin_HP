import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2,
  Menu,
  X,
  ChevronRight,
  MapPin,
  PhoneCall,
  Mail
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

interface HomePageProps {
  services: Service[];
  teamMembers: TeamMember[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ 
  services, 
  teamMembers, 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection 
}) => {
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-blue-400" />
              <h1 className="text-xl font-bold text-white">
                株式会社ケイシン
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'ホーム' },
                { id: 'services', label: '業務案内' },
                { id: 'company', label: '会社案内' },
                { id: 'contact', label: 'お問い合わせ' },
                { id: 'privacy', label: 'プライバシーポリシー' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                                  className={`text-xl font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.id ? 'text-blue-400' : 'text-gray-300'
                }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'ホーム' },
                { id: 'services', label: '業務案内' },
                { id: 'company', label: '会社案内' },
                { id: 'contact', label: 'お問い合わせ' },
                { id: 'privacy', label: 'プライバシーポリシー' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-xl font-medium text-gray-300 hover:text-blue-400 hover:bg-slate-700 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/The-Car-Is-Parking.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            駐車場管理の
            <br />
            新しいスタンダード
          </h2>
          <p className="text-2xl md:text-3xl mb-8 leading-relaxed bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
            福岡での駐車場運営、土地活用ならケイシン
          </p>
          <div className="mt-8">
            <button
              onClick={() => scrollToSection('services')}
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              サービスを見る
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">業務案内</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              駐車場運営に関するあらゆるニーズにお応えする包括的なサービスを提供しています
            </p>
          </div>
          
          <div className="space-y-8">
            {/* 上段: LIONパークと駐車場機器販売 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.slice(0, 2).map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service.path)}
                  className="water-ripple bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group cursor-pointer"
                >
                  <div className="water-layer"></div>
                  <div className="card-content">
                    <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 text-xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 中段: 緊急通報システムと監視カメラ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.slice(2, 4).map((service, index) => (
                <div
                  key={index + 2}
                  onClick={() => handleServiceClick(service.path)}
                  className="water-ripple bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group cursor-pointer"
                >
                  <div className="water-layer"></div>
                  <div className="card-content">
                    <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 text-xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">会社案内</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              経験豊富なプロフェッショナルチームがお客様の成功をサポートします
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-slate-600 group-hover:border-blue-400 transition-colors shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h4>
                <p className="text-blue-400 font-medium mb-4">{member.position}</p>
                <p className="text-gray-300 text-xl leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>

          {/* Company Info */}
          <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-white">会社概要</h4>
                <div className="space-y-3 text-gray-300 text-xl">
                  <p><span className="font-medium text-blue-400 text-xl">会社名：</span>株式会社ケイシン</p>
                  <p><span className="font-medium text-blue-400 text-xl">代表者：</span>代表取締役 秋吉 健治</p>
                  <p><span className="font-medium text-blue-400 text-xl">設立：</span>1979（昭和54）年7月2日</p>
                  <p><span className="font-medium text-blue-400 text-xl">資本金：</span>1,000万円</p>
                  <p><span className="font-medium text-blue-400 text-xl">社員：</span>12名（パート社員除く）</p>
                  <p><span className="font-medium text-blue-400 text-xl">営業方針：</span>誠実</p>
                  <p><span className="font-medium text-blue-400 text-xl">本社：</span>〒812-0044 福岡市博多区千代2丁目2番43号</p>
                  <p><span className="font-medium text-blue-400 text-xl">TEL：</span>(092)632-6610</p>
                  <p><span className="font-medium text-blue-400 text-xl">FAX：</span>(092)632-6612</p>
                  <p><span className="font-medium text-blue-400 text-xl">大分事業所：</span>〒870-0035 大分市中央町3-1-25</p>
                  <p><span className="font-medium text-blue-400 text-xl">TEL：</span>(097)538-2467</p>
                  <p><span className="font-medium text-blue-400 text-xl">FAX：</span>(097)537-1804</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-white">事業内容</h4>
                <ul className="space-y-2 text-gray-300 text-xl">
                  <li>• LIONパーク（駐車場運営管理）</li>
                  <li>• 駐車場機器販売</li>
                  <li>• 緊急通報システム</li>
                  <li>• 監視カメラ</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company History */}
          <div className="mt-8 bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
            <h4 className="text-2xl font-semibold mb-4 text-white">沿革</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-3 text-gray-300 text-xl">
                  <p><span className="font-medium text-blue-400 text-xl">1978年：</span>創業</p>
                  <p><span className="font-medium text-blue-400 text-xl">1979年：</span>株式会社ケイシン設立</p>
                  <p><span className="font-medium text-blue-400 text-xl">1985年：</span>駐車場管理事業開始</p>
                  <p><span className="font-medium text-blue-400 text-xl">1990年：</span>大分事業所開設</p>
                  <p><span className="font-medium text-blue-400 text-xl">1995年：</span>駐車場機器販売事業開始</p>
                </div>
              </div>
              <div>
                <div className="space-y-3 text-gray-300 text-xl">
                  <p><span className="font-medium text-blue-400 text-xl">2000年：</span>セキュリティシステム事業開始</p>
                  <p><span className="font-medium text-blue-400 text-xl">2005年：</span>監視カメラシステム導入</p>
                  <p><span className="font-medium text-blue-400 text-xl">2010年：</span>緊急通報システム導入</p>
                  <p><span className="font-medium text-blue-400 text-xl">2015年：</span>LIONパークサービス開始</p>
                  <p><span className="font-medium text-blue-400 text-xl">2022年：</span>現在に至る</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Banks and Partners */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <h4 className="text-2xl font-semibold mb-4 text-white">取引銀行</h4>
              <ul className="space-y-2 text-gray-300 text-xl">
                <li>• 福岡銀行</li>
                <li>• 西日本シティ銀行</li>
                <li>• 筑邦銀行</li>
                <li>• 大分銀行</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <h4 className="text-2xl font-semibold mb-4 text-white">主要取引先</h4>
              <ul className="space-y-2 text-gray-300 text-xl">
                <li>• 福岡市役所</li>
                <li>• 大分市役所</li>
                <li>• 九州電力</li>
                <li>• 西日本鉄道</li>
                <li>• イオン九州</li>
                <li>• マックスバリュ九州</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">お問い合わせ</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              駐車場運営に関するご相談・お見積りはお気軽にお問い合わせください
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-white">連絡先情報</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 text-xl" />
                  <span className="text-gray-300 text-xl">〒812-0044 福岡市博多区千代2丁目2番43号</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneCall className="w-5 h-5 text-blue-400 text-xl" />
                  <span className="text-gray-300 text-xl">(092)632-6610</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 text-xl" />
                  <span className="text-gray-300 text-xl">info@keishin-p.jp</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-white">営業時間</h4>
              <div className="space-y-2 text-gray-300 text-xl">
                <p>平日：9:00〜18:00</p>
                <p>土曜：9:00〜15:00</p>
                <p>日祝：休業</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">プライバシーポリシー</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              お客様の個人情報保護について
            </p>
          </div>
          
          <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
            <div className="space-y-6 text-gray-300 text-xl">
              <p>
                株式会社ケイシン（以下「当社」）は、お客様の個人情報の重要性を認識し、個人情報の保護に関する法律（以下「個人情報保護法」）を遵守すると共に、適切な収集、利用、管理、保護に努めます。
              </p>
              <p>
                当社は、お客様から収集した個人情報を、以下の目的で利用いたします：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>駐車場運営管理サービスの提供</li>
                <li>駐車場機器販売・メンテナンスサービスの提供</li>
                <li>セキュリティシステムの提供・保守</li>
                <li>お客様からのお問い合わせへの対応</li>
                <li>サービス向上のための調査・分析</li>
              </ul>
              <p>
                当社は、お客様の個人情報を適切に管理し、以下に該当する場合を除き、個人情報を第三者に開示いたしません。
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>お客様の同意がある場合</li>
                <li>法令に基づき開示することが必要である場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合</li>
              </ul>
              <p>
                お客様の個人情報の開示、訂正、利用停止、消去等のご要望がございましたら、お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
