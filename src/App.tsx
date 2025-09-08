import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { 
  Car, 
  Shield, 
  Camera, 
  Phone, 
  Settings, 
  Menu,
  X,
  ChevronRight,
  Mail,
  MapPin,
  User,
  Building2,
  PhoneCall,
  MapPinIcon
} from 'lucide-react';
import HomePage from './components/HomePage';
import LionPark from './components/LionPark';
import ParkingEquipment from './components/ParkingEquipment';
import EmergencySystem from './components/EmergencySystem';
import SurveillanceCamera from './components/SurveillanceCamera';

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
      title: "LIONパーク（駐車場運営管理）",
      description: "オーナーから土地又は既存駐車場（平面・ビル、立体｛自走・タワー・多段｝）を一括でお借りし当社が駐車管理機器・看板等を設置し、運営します。",
      path: "/lion-park"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "駐車場機器販売",
      description: "フラップ式精算システム、ゲート式精算システム、セキュリティゲートシステム、車路管制システムなど、各種機器を取り扱っております。",
      path: "/parking-equipment"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "緊急通報システム",
      description: "24時間対応の緊急通報システム。トラブル発生時も迅速に対応し、安心・安全な駐車場運営を支援。",
      path: "/emergency-system"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "監視カメラ",
      description: "高性能監視カメラシステムで駐車場のセキュリティを強化。リアルタイム監視と記録機能を提供。",
      path: "/surveillance-camera"
    }
  ];


  return (
    <Routes>
      <Route path="/" element={<HomePage services={services} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection} scrollToSection={scrollToSection} />} />
      <Route path="/lion-park" element={<LionPark />} />
      <Route path="/parking-equipment" element={<ParkingEquipment />} />
      <Route path="/emergency-system" element={<EmergencySystem />} />
      <Route path="/surveillance-camera" element={<SurveillanceCamera />} />
    </Routes>
  );
};

export default App;