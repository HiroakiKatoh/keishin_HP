import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
	Menu,
	X,
	ChevronRight,
	MapPin,
	PhoneCall
} from 'lucide-react';
import { sendContactEmail, ContactFormData } from '../api/contact';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

interface HomePageProps {
  services: Service[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ 
  services, 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  scrollToSection 
}) => {
  const navigate = useNavigate();
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const messageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // お問い合わせフォームの状態管理
  const [formData, setFormData] = useState({
    inquiryType: '',
    companyName: '',
    name: '',
    email: '',
    phone: '',
    fax: '',
    prefecture: '',
    address: '',
    message: ''
  });

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 送信ボタンを無効化
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = '送信中...';
    }

    try {
      // サーバーサイドからメール送信
      const result = await sendContactEmail(formData as ContactFormData);
      
      if (result.success) {
        alert(result.message);
        // フォームをリセット
        setFormData({
          inquiryType: '',
          companyName: '',
          name: '',
          email: '',
          phone: '',
          fax: '',
          prefecture: '',
          address: '',
          message: ''
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('送信エラー:', error);
      alert('申し訳ございません。送信に失敗しました。直接お電話でお問い合わせください。');
    } finally {
      // 送信ボタンを再有効化
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = '送信する';
      }
    }
  };

  useEffect(() => {
    const messageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMessageVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleCards(prev => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (messageRef.current) {
      messageObserver.observe(messageRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) {
        cardObserver.observe(ref);
      }
    });

    return () => {
      if (messageRef.current) {
        messageObserver.unobserve(messageRef.current);
      }
      cardRefs.current.forEach((ref) => {
        if (ref) {
          cardObserver.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img src="/images/top/keishin_logo.png" alt="株式会社ケイシン ロゴ" className="w-8 h-8" />
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
      <section id="home" className="pt-16 min-h-screen relative overflow-hidden">
        {/* Mobile: inline video with overlaid smaller text/button */}
        <div className="block md:hidden">
          <div className="relative w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-contain"
            >
              <source src="/videos/The-Car-Is-Parking.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="transform scale-[0.6] origin-center">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  駐車場管理の
                  <br />
                  新しいスタンダード
                </h2>
                <p className="text-sm mb-6 leading-relaxed bg-blue-600 text-white px-2 py-2 rounded-lg inline-block whitespace-nowrap">
                  福岡での駐車場運営、土地活用ならケイシン
                </p>
                <button
                  onClick={() => scrollToSection('services')}
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  サービスを見る
                <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet: background video with overlay text/button */}
        <div className="hidden md:flex min-h-screen items-center justify-center relative">
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h2 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              駐車場管理の
              <br />
              新しいスタンダード
            </h2>
            <p className="text-3xl mb-8 leading-relaxed bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
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
        </div>
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
                  ref={(el) => (cardRefs.current[index] = el)}
                  onClick={() => handleServiceClick(service.path)}
                  className={`water-ripple bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group cursor-pointer ${
                    visibleCards.has(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
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
                  ref={(el) => (cardRefs.current[index + 2] = el)}
                  onClick={() => handleServiceClick(service.path)}
                  className={`water-ripple bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group cursor-pointer ${
                    visibleCards.has(index + 2)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 200}ms` }}
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
              誠実を旨に、お客様に安心してご利用いただける駐車場サービスを提供しています
            </p>
          </div>

          {/* Top Message */}
          <div 
            ref={messageRef}
            className={`bg-slate-200/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-300 mb-16 transition-all duration-1000 ease-out ${
              isMessageVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h4 className="text-2xl font-semibold mb-6 text-slate-800 text-center">代表メッセージ</h4>
              <div className="space-y-6 text-slate-700 text-xl leading-relaxed font-handwriting">
                <p>
                  平素より格別のご支援を賜り、誠にありがとうございます。
                </p>
                <p>
                  弊社は創業以来、「誠実」をモットーに地域の皆さまに安心してご利用いただける駐車場運営に努めてまいりました。これもひとえに皆さまのご支援の賜物と深く感謝申し上げます。
                </p>
                <p>
                  近年、駐車場業界を取り巻く環境は大きく変化しており、従来の機械式から、車両を自動で認識するカメラ型システムへの移行が進んでおります。弊社におきましても、時代の流れに即した利便性と安全性の向上を目指し、新しい設備導入を積極的に進めております。
                </p>
                <p>
                  これからも「誠実」を原点に、お客様に快適で信頼いただける駐車場サービスを提供し続ける所存です。引き続き変わらぬご支援ご愛顧を賜りますようお願い申し上げます。
                </p>
              </div>
              <div className="mt-8">
                <div className="text-slate-700 text-xl flex justify-end items-center space-x-4 font-handwriting">
                  <div className="text-right">
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl">ケイシン株式会社</div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl">代表取締役</div>
                  </div>
                  <div>
                    <img 
                      src="/images/top/signature.png" 
                      alt="金本秀幸" 
                      className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 text-white">会社概要</h4>
                <div className="space-y-3 text-gray-300 text-xl">
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">会社名：</span>
                    <span className="sm:ml-4">株式会社ケイシン</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">代表者：</span>
                    <span className="sm:ml-4">代表取締役 金本 秀幸</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">設立：</span>
                    <span className="sm:ml-4">1979（昭和54）年7月2日</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">資本金：</span>
                    <span className="sm:ml-4">1,000万円</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">社員：</span>
                    <span className="sm:ml-4">12名（パート社員除く）</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">営業方針：</span>
                    <span className="sm:ml-4">誠実</span>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">本社：</span>
                    <div className="sm:ml-4">
                      <div>〒812-0044</div>
                      <div><a href="https://www.google.com/maps/search/福岡市博多区千代2丁目2番43号" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline hover:no-underline transition-colors">福岡市博多区千代2丁目2番43号</a></div>
                      <div>TEL:(092)632-6610</div>
                      <div>FAX:(092)632-6612</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row">
                    <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">大分事業所：</span>
                    <div className="sm:ml-4">
                      <div>〒870-0035</div>
                      <div><a href="https://www.google.com/maps/search/大分市中央町3-1-25" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline hover:no-underline transition-colors">大分市中央町3-1-25</a></div>
                      <div>TEL:(097)538-2467</div>
                      <div>FAX:(097)537-1804</div>
                    </div>
                  </div>
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
            <div className="space-y-3 text-gray-300 text-xl">
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">1978年11月：</span>
                <span className="sm:ml-4">創業</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">1979年 7月：</span>
                <div className="sm:ml-4">
                  <div>資本金200万円で、株式会社ケイシンとして設立</div>
                  <div>福岡市博多区榎田町に、事務所を開設</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">1979年10月：</span>
                <div className="sm:ml-4">
                  <div>立石電機株式会社（現オムロン株式会社）特約店契約締結</div>
                  <div>駐車場専用のタイムレジスタの販売、駐車場管制装置の販売代行業務と、工事を開始</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">1981年 4月：</span>
                <div className="sm:ml-4">
                  <div>福岡市博多区博多駅前4丁目に、事務所を移転。</div>
                  <div>駐車場管理機器の、特約店契約を締結</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">1992年 3月：</span>
                <span className="sm:ml-4">現在地に移転</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">1995年 9月：</span>
                <span className="sm:ml-4">資本金1,000万に増資</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2000年 2月：</span>
                <span className="sm:ml-4">PHS緊急通報装置を開発</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2001年10月：</span>
                <span className="sm:ml-4">東京営業所を開設</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2002年10月：</span>
                <div className="sm:ml-4">
                  <div>アマノ株式会社と駐車場管理管制機器の特約店契約を締結</div>
                  <div>（オムロン㈱駐車場機器の営業権をアマノ㈱へ譲渡の為）</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2003年 6月：</span>
                <span className="sm:ml-4">東京営業所を移転</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2009年 3月：</span>
                <span className="sm:ml-4">東京営業所閉鎖</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2012年 7月：</span>
                <span className="sm:ml-4">株式会社テックコーポレーションと衛生環境システムの特約店契約を締結</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2013年 6月：</span>
                <span className="sm:ml-4">ロックプレート「ＫＳＰ-501」自社開発・販売開始</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2017年11月：</span>
                <span className="sm:ml-4">フラップ式精算機「ＫＳ-200」自社開発・販売開始</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2018年 8月：</span>
                <span className="sm:ml-4">緊急通報システム「おまかせコールＫＳ-55mini 4G」自社開発・販売開始</span>
              </div>
              <div className="flex flex-col sm:flex-row">
                <span className="font-medium text-blue-400 text-xl sm:w-32 flex-shrink-0">2022年10月：</span>
                <span className="sm:ml-4">ＮＴＴドコモ4G回線契約2000回線突破</span>
              </div>
            </div>
          </div>

          {/* Transaction Banks and Partners */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <h4 className="text-2xl font-semibold mb-4 text-white">取引銀行</h4>
              <ul className="space-y-2 text-gray-300 text-xl">
                <li>• 西日本シティ銀行　比恵支店</li>
                <li>• 福岡銀行　比恵支店</li>
                <li>• みずほ銀行　三鷹支店</li>
                <li>• 三菱UFJ銀行　福岡支店</li>
              </ul>
            </div>
            <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <h4 className="text-2xl font-semibold mb-4 text-white">主要取引先</h4>
              <ul className="space-y-2 text-gray-300 text-xl">
                <li>• アマノ㈱</li>
                <li>• ㈱小林</li>
                <li>• ㈱日本ロール紙</li>
                <li>• パナソニック産機システムズ(株)</li>
                <li>• ㈱ＮＴＴドコモ</li>
                <li>• ソフトバンク㈱</li>
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
          
          {/* お問い合わせフォーム */}
          <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600 mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-white">お問い合わせフォーム</h4>
            <p className="text-gray-300 text-xl mb-8">
              お問合せありがとうございます。<br />
              下記フォームに必要事項をご記入の上、送信ボタンを押してください。<br />
              内容を確認の上、担当者から折り返しご連絡させていただきます。
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* お問合せ項目 */}
              <div>
                <label className="block text-white text-xl font-medium mb-2">
                  <span className="text-red-400">*</span>お問合せ項目
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg bg-slate-600 border border-slate-500 text-white text-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">【選択して下さい】</option>
                  <option value="general">全般的なお問い合わせ</option>
                  <option value="parking-system">「駐車場システム」及び「ゲートシステム」に関するお問い合わせ</option>
                  <option value="bicycle-system">「駐輪場システム」に関するお問い合わせ</option>
                  <option value="parking-business">「駐車場事業」に関するお問い合わせ</option>
                  <option value="lion-park">「ライオンパーク」に関するお問い合わせ</option>
                  <option value="phs-card">「PHSカード版緊急通信・制御装置」に関するお問い合わせ</option>
                  <option value="pc-monitoring">「PC版遠隔監視・録画・制御システム」に関するお問い合わせ</option>
                  <option value="parking-software">「駐車場管理ソフト」に関するお問い合わせ</option>
                  <option value="other">その他のお問い合わせ</option>
                </select>
              </div>

              {/* 会社名 */}
              <div>
                <label className="block text-white text-xl font-medium mb-2">会社名</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-slate-600 border border-slate-500 text-white text-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* お名前 */}
              <div>
                <label className="block text-white text-xl font-medium mb-2">
                  <span className="text-red-400">*</span>お名前
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg bg-slate-600 border border-slate-500 text-white text-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-white text-xl font-medium mb-2">
                  <span className="text-red-400">*</span>メールアドレス
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg bg-slate-600 border border-slate-500 text-white text-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block text-white text-xl font-medium mb-2">電話番号</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-slate-600 border border-slate-500 text-white text-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* FAX番号 */}
              <div>
                <label className="block text-white text-xl font-medium mb-2">FAX番号</label>
                <input
                  type="tel"
                  name="fax"
                  value={formData.fax}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-lg bg-slate-600 border border-slate-500 text-white text-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* ご住所 */}
              <div>
                <label className="block text-white text-xl font-medium mb-2">ご住所</label>
                <div className="space-y-3">
                  <select
                    name="prefecture"
                    value={formData.prefecture}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-slate-600 border border-slate-500 text-white text-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">都道府県 【選択して下さい】</option>
                    <option value="hokkaido">北海道</option>
                    <option value="aomori">青森県</option>
                    <option value="iwate">岩手県</option>
                    <option value="akita">秋田県</option>
                    <option value="miyagi">宮城県</option>
                    <option value="yamagata">山形県</option>
                    <option value="fukushima">福島県</option>
                    <option value="tochigi">栃木県</option>
                    <option value="gunma">群馬県</option>
                    <option value="ibaraki">茨城県</option>
                    <option value="saitama">埼玉県</option>
                    <option value="tokyo">東京都</option>
                    <option value="chiba">千葉県</option>
                    <option value="kanagawa">神奈川県</option>
                    <option value="yamanashi">山梨県</option>
                    <option value="nagano">長野県</option>
                    <option value="niigata">新潟県</option>
                    <option value="toyama">富山県</option>
                    <option value="ishikawa">石川県</option>
                    <option value="fukui">福井県</option>
                    <option value="shizuoka">静岡県</option>
                    <option value="gifu">岐阜県</option>
                    <option value="aichi">愛知県</option>
                    <option value="mie">三重県</option>
                    <option value="shiga">滋賀県</option>
                    <option value="kyoto">京都府</option>
                    <option value="osaka">大阪府</option>
                    <option value="hyogo">兵庫県</option>
                    <option value="nara">奈良県</option>
                    <option value="wakayama">和歌山県</option>
                    <option value="tokushima">徳島県</option>
                    <option value="kagawa">香川県</option>
                    <option value="ehime">愛媛県</option>
                    <option value="kochi">高知県</option>
                    <option value="tottori">鳥取県</option>
                    <option value="shimane">島根県</option>
                    <option value="okayama">岡山県</option>
                    <option value="hiroshima">広島県</option>
                    <option value="yamaguchi">山口県</option>
                    <option value="fukuoka">福岡県</option>
                    <option value="saga">佐賀県</option>
                    <option value="nagasaki">長崎県</option>
                    <option value="oita">大分県</option>
                    <option value="kumamoto">熊本県</option>
                    <option value="miyazaki">宮崎県</option>
                    <option value="kagoshima">鹿児島県</option>
                    <option value="okinawa">沖縄県</option>
                  </select>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="市区町村 丁目番地"
                    className="w-full p-3 rounded-lg bg-slate-600 border border-slate-500 text-white text-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* お問合せ内容 */}
              <div>
                <label className="block text-white text-xl font-medium mb-2">お問合せ内容</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full p-3 rounded-lg bg-slate-600 border border-slate-500 text-white text-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                />
              </div>

              {/* 送信ボタン */}
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  送信する
                </button>
              </div>
            </form>
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
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold mb-6 text-white">営業時間</h4>
              <div className="space-y-2 text-gray-300 text-xl">
                <p>平日：9:00〜18:00</p>
                <p>定休日：土日祝</p>
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
                株式会社ケイシンは、各種サービスのご提供にあたり、お客様の個人情報をお預かりしております。
                弊社は、個人情報に関する法令を遵守し、個人情報の適切な取り扱いを実現致します。
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">1. 個人情報の取得について</h4>
                  <p>弊社は、偽りその他不正の手段によらず適正に個人情報を取得致します。</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">2. 個人情報の利用について</h4>
                  <p className="mb-2">弊社は、個人情報を以下の利用目的の達成に必要な範囲内で、利用致します。</p>
                  <p className="mb-2">以下に定めのない目的で個人情報を利用する場合、あらかじめご本人の同意を得た上で行ないます。</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>お見積のご依頼・ご相談に対する回答及び資料送付</li>
                    <li>ご依頼を受けた業務の遂行に必要な場合</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">3. 個人情報の安全管理について</h4>
                  <p>弊社は、取り扱う個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">4. 個人情報の委託について</h4>
                  <p className="mb-2">弊社は、個人情報の取り扱いの全部または一部を第三者に委託する場合は、当該第三者について厳正な調査を行い、取り扱いを委託された個人情報の安全管理が図られるよう当該第三者に対する必要かつ適切な監督を行います。</p>
                  <p>また、業務を遂行する場合に個人情報の取り扱いを委託する場合があります。</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">5. 個人情報の第三者提供について</h4>
                  <p>弊社は、個人情報保護法等の法令に定めのある場合を除き、個人情報をあらかじめご本人の同意を得ることなく、第三者に提供致しません。</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">6. 個人情報の開示・訂正等について</h4>
                  <p className="mb-2">弊社は、ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。</p>
                  <p className="mb-2">その際、ご本人であることが確認できない場合には、開示に応じません。</p>
                  <p className="mb-2">個人情報の内容に誤りがあり、ご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応致します。</p>
                  <p className="mb-2">その際、ご本人であることが確認できない場合には、これらの請求に応じません。</p>
                  <p className="mb-2">弊社の個人情報の取り扱いにつきまして、上記の請求・お問い合わせ等ございましたら、下記までご連絡くださいますようお願い申し上げます。</p>
                  <div className="bg-slate-600 p-4 rounded-lg mt-4">
                    <p className="font-semibold text-white">【連絡先】株式会社ケイシン　電話：092-632-6610</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">7. 本方針の変更</h4>
                  <p className="mb-2">本方針の内容は予告なく変更されることがあります。</p>
                  <p>変更後の本方針については、弊社が別途定める場合を除いて、当サイトに掲載した時から効力を生じるものとします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
