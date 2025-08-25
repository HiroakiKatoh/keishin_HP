import React, { useState, useEffect } from 'react';
import { 
  Car, 
  Shield, 
  Camera, 
  Phone, 
  Settings, 
  Wind,
  Menu,
  X,
  ChevronRight,
  Mail,
  MapPin,
  User,
  Building2
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'company', 'contact', 'privacy'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "駐車場運営を始めたい方",
      description: "新規駐車場開設から運営管理まで、トータルサポートいたします。土地活用のご提案から収益最大化まで。"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "駐車場機器販売",
      description: "最新の駐車場機器を取り揃えております。ゲート、発券機、精算機など高品質な機器を提供。"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "緊急通報システム",
      description: "24時間対応の緊急通報システム。トラブル発生時も迅速に対応し、安心・安全な駐車場運営を支援。"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "監視カメラ",
      description: "高性能監視カメラシステムで駐車場のセキュリティを強化。リアルタイム監視と記録機能を提供。"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "セキュリティシステム",
      description: "総合的なセキュリティソリューション。防犯対策から入退場管理まで包括的にサポート。"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "空気サプリメント",
      description: "駐車場環境改善のための空気清浄システム。快適な駐車環境の実現をお手伝いします。"
    }
  ];

  const teamMembers = [
    {
      name: "田中 太郎",
      position: "代表取締役社長",
      description: "駐車場業界20年の経験を持つエキスパート。お客様の成功を第一に考えたサービスを提供します。",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "佐藤 花子",
      position: "技術開発部長",
      description: "最新技術を駆使した駐車場システムの開発を担当。革新的なソリューションを生み出します。",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "山田 一郎",
      position: "営業部長",
      description: "お客様との信頼関係を大切に、最適なソリューションをご提案いたします。",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "鈴木 美咲",
      position: "カスタマーサポート責任者",
      description: "24時間体制でお客様をサポート。迅速丁寧な対応でお客様の安心をお守りします。",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-blue-400" />
              <h1 className="text-xl font-bold text-white">
                株式会社ケイシンパーキング
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
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
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
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-slate-700 rounded-md"
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            駐車場管理の
            <br />
            新しいスタンダード
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            最先端技術とプロフェッショナルなサービスで、
            <br />
            あなたの駐車場運営を成功に導きます
          </p>
          <button
            onClick={() => scrollToSection('services')}
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            サービスを見る
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
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
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>

          {/* Company Info */}
          <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-white">会社概要</h4>
                <div className="space-y-3 text-gray-300">
                  <p><span className="font-medium text-blue-400">会社名：</span>株式会社ケイシンパーキング</p>
                  <p><span className="font-medium text-blue-400">設立：</span>1985年4月</p>
                  <p><span className="font-medium text-blue-400">資本金：</span>5,000万円</p>
                  <p><span className="font-medium text-blue-400">従業員数：</span>120名</p>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-white">事業内容</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 駐車場の企画・設計・施工・運営管理</li>
                  <li>• 駐車場機器の販売・保守</li>
                  <li>• セキュリティシステムの導入・運用</li>
                  <li>• 駐車場コンサルティング業務</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">お問い合わせ</h3>
            <p className="text-xl text-gray-300">
              駐車場運営に関するご相談は、お気軽にお問い合わせください
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">本社所在地</h4>
                    <p className="text-gray-300">
                      〒100-0001<br />
                      東京都千代田区千代田1-1-1<br />
                      ケイシンパーキングビル 5F
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">お電話でのお問い合わせ</h4>
                    <p className="text-gray-300">
                      TEL: 03-1234-5678<br />
                      受付時間: 平日 9:00-18:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">メールでのお問い合わせ</h4>
                    <p className="text-gray-300">
                      info@keishin-parking.jp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <h4 className="text-2xl font-semibold text-white mb-6">お問い合わせフォーム</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="山田太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="株式会社〇〇"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    お問い合わせ内容 *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  送信する
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-white">プライバシーポリシー</h3>
          </div>

          <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 prose prose-invert max-w-none">
            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">個人情報の取り扱いについて</h4>
                <p>
                  株式会社ケイシンパーキング（以下「当社」）は、お客様の個人情報の保護に最大限配慮し、
                  以下のポリシーに基づいて個人情報を適切に取り扱います。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">1. 個人情報の収集について</h4>
                <p>
                  当社では、お客様から個人情報をお預かりする際には、利用目的を明確にし、
                  その目的に必要な範囲でのみ個人情報を収集いたします。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">2. 個人情報の利用について</h4>
                <p>
                  お客様からお預かりした個人情報は、収集の際にお示しした利用目的の範囲内でのみ利用し、
                  お客様の同意なく目的外利用はいたしません。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">3. 個人情報の第三者提供について</h4>
                <p>
                  当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">4. 個人情報の管理について</h4>
                <p>
                  当社は、お客様の個人情報を正確かつ最新の状態に保つよう努め、
                  不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、
                  適切なセキュリティ対策を実施しています。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">5. お問い合わせ</h4>
                <p>
                  個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。<br />
                  株式会社ケイシンパーキング<br />
                  TEL: 03-1234-5678<br />
                  Email: privacy@keishin-parking.jp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-bold text-white">株式会社ケイシンパーキング</h4>
            </div>
            <p className="text-gray-400 mb-6">
              駐車場管理のプロフェッショナル - あなたの成功をサポートします
            </p>
            <div className="text-sm text-gray-500">
              © 2024 株式会社ケイシンパーキング All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;