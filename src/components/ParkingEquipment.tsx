import React, { useEffect } from 'react';
import { ChevronLeft, Lock, CreditCard, Shield, Car, Settings, Package } from 'lucide-react';

const ParkingEquipment = () => {
  // ページ遷移時にスクロール位置をトップに設定
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    window.history.back();
  };

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
            
            {/* Back Button */}
            <button
              onClick={goBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>戻る</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              駐車場機器販売
            </h2>
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
              アフターフォロー万全の機器販売
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
                         {/* LOCK PLATE（新型ロックプレート）セクション */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
               <div className="text-center mb-12">
                 <div className="text-blue-400 mb-4 flex justify-center">
                   <Lock className="w-16 h-16" />
                 </div>
                 <h3 className="text-4xl font-bold mb-4 text-white">LOCK PLATE（新型ロックプレート）</h3>
                 <p className="text-xl text-gray-300 leading-relaxed">
                   駐車場のセキュリティを向上させる革新的なロックシステム
                 </p>
               </div>
               
               {/* 商品画像 */}
               <div className="mb-12 text-center">
                 <img 
                   src="/images/services/kiki/img1.png" 
                   alt="LOCK PLATE（新型ロックプレート）" 
                   className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                 />
               </div>

               {/* 訴求ポイントカード */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* HARD LOCK カード */}
                 <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                   <h4 className="text-2xl font-bold mb-4 text-blue-400 text-center">HARD LOCK</h4>
                   <div className="text-center text-gray-300 text-xl">
                     足で踏んでもフラップ板が下がらない<br />
                     不正退出困難設計！
                   </div>
                 </div>

                 {/* WATER RESISTANT カード */}
                 <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                   <h4 className="text-2xl font-bold mb-4 text-blue-400 text-center">WATER RESISTANT</h4>
                   <div className="text-center text-gray-300 text-xl">
                     水に浸かっても安心の耐水構造<br />
                     天災や異常気象等による洪水等の水害でも<br />
                     その耐水性を発揮！
                   </div>
                 </div>

                 {/* AUTO CONFIGURATION カード */}
                 <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                   <h4 className="text-2xl font-bold mb-4 text-blue-400 text-center">AUTO CONFIGURATION</h4>
                   <div className="text-center text-gray-300 text-xl">
                     車高にあわせて高さを自動設定
                   </div>
                 </div>
               </div>
             </div>

                         {/* フラップ式精算システムセクション */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
               <div className="text-center mb-12">
                 <div className="text-blue-400 mb-4 flex justify-center">
                   <CreditCard className="w-16 h-16" />
                 </div>
                 <h3 className="text-4xl font-bold mb-4 text-white">フラップ式精算システム</h3>
                 <p className="text-xl text-gray-300 leading-relaxed">
                   狭いスペースでも駐車場として活用。少ない駐車台数、道路までの距離がないような場所でも駐車場として運用できます。
                 </p>
               </div>
               
                               {/* 料金精算システム機器カード */}
                <div className="bg-slate-700/50 p-6 rounded-lg mb-8">
                  <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">料金精算システム機器</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-600/50 p-4 rounded-lg text-center">
                      <div className="text-blue-400 font-semibold text-xl mb-2">FT-4800</div>
                      <div className="text-gray-300 text-xl">料金精算機</div>
                    </div>
                    <div className="bg-slate-600/50 p-4 rounded-lg text-center">
                      <div className="text-blue-400 font-semibold text-xl mb-2">FT-4000</div>
                      <div className="text-gray-300 text-xl">1～15車室用<br />フラップ式料金精算機</div>
                    </div>
                    <div className="bg-slate-600/50 p-4 rounded-lg text-center">
                      <div className="text-blue-400 font-semibold text-xl mb-2">KSP-501</div>
                      <div className="text-gray-300 text-xl">フラップ式</div>
                    </div>
                  </div>
                </div>

                {/* 精算システム機器集合写真 */}
                <div className="mb-12 text-center">
                  <img 
                    src="/images/services/kiki/img5.png" 
                    alt="フラップ式精算システム機器" 
                    className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                  />
                </div>

                {/* ご利用手順カード */}
                <div className="bg-slate-700/50 p-6 rounded-lg mb-8">
                  <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">ご利用手順</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg font-bold">1</div>
                      <div className="text-gray-300 text-xl">車両が所定の駐車位置に駐車すると自動的にフラップ板が起き上がります。(駐車完了)</div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg font-bold">2</div>
                      <div className="text-gray-300 text-xl">料金精算機に駐車位置フラップ番号を入力すると駐車料金を表示します。</div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg font-bold">3</div>
                      <div className="text-gray-300 text-xl">料金精算が完了するとフラップ板が下降します。</div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg font-bold">4</div>
                      <div className="text-gray-300 text-xl">出場します。</div>
                    </div>
                  </div>
                </div>
             </div>

                         {/* ゲート式精算システムセクション */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
               <div className="text-center mb-12">
                 <div className="text-blue-400 mb-4 flex justify-center">
                   <Car className="w-16 h-16" />
                 </div>
                 <h3 className="text-4xl font-bold mb-4 text-white">ゲート式精算システム</h3>
                 <p className="text-xl text-gray-300 leading-relaxed">
                   駐車場の出入口にゲートバーを設置し、駐車場の一般利用者や登録・許可されている車だけが入出場できるシステムです。入口で駐車券を発行し、出場の際にお金を入れて精算します。全自動化により、夜間・休日関係なく運営できます。
                 </p>
               </div>
               
               {/* 上段：料金精算システム機器 */}
               <div className="bg-slate-700/50 p-6 rounded-lg mb-8">
                 <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">料金精算システム機器（上段）</h4>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <div className="bg-slate-600/50 p-4 rounded-lg text-center">
                     <div className="text-blue-400 font-semibold text-xl mb-2">GT-4700</div>
                     <div className="text-gray-300 text-xl">スタンダードタイプの精算機</div>
                   </div>
                   <div className="bg-slate-600/50 p-4 rounded-lg text-center">
                     <div className="text-blue-400 font-semibold text-xl mb-2">GT-7700</div>
                     <div className="text-gray-300 text-xl">見やすい大型カラー液晶ディスプレイにより、操作性を大幅に向上</div>
                   </div>
                   <div className="bg-slate-600/50 p-4 rounded-lg text-center">
                     <div className="text-blue-400 font-semibold text-xl mb-2">GT-7800</div>
                     <div className="text-gray-300 text-xl">事前に駐車料金を自動で精算する事前精算機</div>
                   </div>
                 </div>
                 
                 {/* 上段の画像 */}
                 <div className="text-center">
                   <img 
                     src="/images/services/kiki/img6.png" 
                     alt="ゲート式精算システム機器（上段）" 
                     className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                   />
                 </div>
               </div>

               {/* 下段：料金精算システム機器 */}
               <div className="bg-slate-700/50 p-6 rounded-lg mb-8">
                 <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">料金精算システム機器（下段）</h4>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <div className="bg-slate-600/50 p-4 rounded-lg text-center">
                     <div className="text-blue-400 font-semibold text-xl mb-2">GT-2700/GT-2800</div>
                     <div className="text-gray-300 text-xl">駐車券発券機</div>
                   </div>
                   <div className="bg-slate-600/50 p-4 rounded-lg text-center">
                     <div className="text-blue-400 font-semibold text-xl mb-2">NT-1500/GT-1500</div>
                     <div className="text-gray-300 text-xl">カーゲート</div>
                   </div>
                   <div className="bg-slate-600/50 p-4 rounded-lg text-center">
                     <div className="text-blue-400 font-semibold text-xl mb-2">NT-1900</div>
                     <div className="text-gray-300 text-xl">パーキャッチャー</div>
                   </div>
                 </div>
                 
                 {/* 下段の画像 */}
                 <div className="text-center">
                   <img 
                     src="/images/services/kiki/img7.png" 
                     alt="ゲート式精算システム機器（下段）" 
                     className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                   />
                 </div>
               </div>

               {/* ご利用手順カード */}
               <div className="bg-slate-700/50 p-6 rounded-lg mb-8">
                 <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">ご利用手順</h4>
                 <div className="space-y-4">
                   <div className="flex items-start space-x-4">
                     <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg font-bold">1</div>
                     <div className="text-gray-300 text-xl">車が駐車場入口に進入すると、駐車券発行機から駐車券が発行されます。</div>
                   </div>
                   <div className="flex items-start space-x-4">
                     <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg font-bold">2</div>
                     <div className="text-gray-300 text-xl">駐車券を抜き取るとゲートバーが開き入場します。</div>
                   </div>
                   <div className="flex items-start space-x-4">
                     <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg font-bold">3</div>
                     <div className="text-gray-300 text-xl">出口で、駐車券を出口精算機に挿入し、駐車料金の精算をします。</div>
                   </div>
                   <div className="flex items-start space-x-4">
                     <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-lg font-bold">4</div>
                     <div className="text-gray-300 text-xl">精算が完了すると、ゲートバーが開き出場します。</div>
                   </div>
                 </div>
               </div>

               {/* 特徴カード */}
               <div className="bg-slate-700/50 p-6 rounded-lg">
                 <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">特徴</h4>
                 <div className="space-y-6">
                   <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h5 className="text-xl font-semibold mb-3 text-blue-400">出口精算式タイプ</h5>
                     <div className="text-gray-300 text-xl">最もスタンダードなゲート式駐車場。</div>
                   </div>
                   <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h5 className="text-xl font-semibold mb-3 text-blue-400">事前精算式タイプ</h5>
                     <div className="text-gray-300 text-xl">駐車場内や施設内の精算コーナーで事前に精算を済ませることで、出口では精算済の駐車券を出口判別機・出口精算機に入れるだけで出場することができます。出口で精算しないため、出場時の精算による混雑・渋滞を解消できます。</div>
                   </div>
                   <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h5 className="text-xl font-semibold mb-3 text-blue-400">有人タイプ</h5>
                     <div className="text-gray-300 text-xl">入口で駐車券を発行し、出場する際は係員が自動読取計算機に駐車券を挿入して、料金の計算・回収を行います。係員が対応するためスムーズに出場が可能です。</div>
                   </div>
                 </div>
               </div>
             </div>

                         {/* セキュリティゲートシステムセクション */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
               <div className="text-center mb-12">
                 <div className="text-blue-400 mb-4 flex justify-center">
                   <Shield className="w-16 h-16" />
                 </div>
                 <h3 className="text-4xl font-bold mb-4 text-white">セキュリティゲートシステム</h3>
                 <p className="text-xl text-gray-300 leading-relaxed">
                   セキュリティゲートシステムで車両進入・車両通行管理を自動化します。
                 </p>
               </div>
               
               {/* システム画像 */}
               <div className="mb-12 text-center">
                 <img 
                   src="/images/services/kiki/img8.jpg" 
                   alt="セキュリティゲートシステム" 
                   className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                 />
               </div>

               {/* 特徴カード */}
               <div className="bg-slate-700/50 p-6 rounded-lg">
                 <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">特徴</h4>
                 <div className="space-y-6">
                   <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h5 className="text-xl font-semibold mb-3 text-blue-400">特徴１：入出門の入出場管理</h5>
                     <div className="text-gray-300 text-xl">守衛所などの管理室に開閉スイッチを設置。管理者がゲートの開閉を制御して、車両進入を管理します。</div>
                   </div>
                   <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h5 className="text-xl font-semibold mb-3 text-blue-400">特徴２：特定車両通行路の進入制限</h5>
                     <div className="text-gray-300 text-xl">専用リモコンでゲートの開閉を制御します。社員や取引業者など、専用リモコンを所持した特定車両の進入制限が自動管理できます。</div>
                   </div>
                   <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h5 className="text-xl font-semibold mb-3 text-blue-400">特徴３：一方通行路の進入制限</h5>
                     <div className="text-gray-300 text-xl">地面に埋設したループコイルやセンサーが一方向から侵入してきた車両を感知してゲートを開閉します。</div>
                   </div>
                   <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h5 className="text-xl font-semibold mb-3 text-blue-400">特徴４：社員専用駐車場の管理</h5>
                     <div className="text-gray-300 text-xl">社員証などのID・ICカードと読み取り装置を連動してゲートの開閉を制御します。</div>
                   </div>
                 </div>
               </div>
             </div>

                         {/* 車路管制システムセクション */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
               <div className="text-center mb-12">
                 <div className="text-blue-400 mb-4 flex justify-center">
                   <Settings className="w-16 h-16" />
                 </div>
                 <h3 className="text-4xl font-bold mb-4 text-white">車路管制システム</h3>
                 <p className="text-xl text-gray-300 leading-relaxed">
                   駐車場内の安全確保は最も大切なポイントです。利用者に効率と快適性を、オーナーにも安心と信頼を与えます。
                 </p>
               </div>
               
               {/* 車両検知器 */}
               <div className="bg-slate-700/50 p-6 rounded-lg mb-8">
                 <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">車両検知器</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                   <div className="text-center">
                     <img 
                       src="/images/services/kiki/img9.jpg" 
                       alt="車両検知器" 
                       className="w-[400px] mx-auto h-[300px] object-contain rounded-lg"
                     />
                   </div>
                   <div className="text-gray-300 text-xl leading-relaxed">
                     車路にループコイルを埋設。進入車両を感知して、各機器に信号を出力します。
                   </div>
                 </div>
               </div>

               {/* 監視盤 */}
               <div className="bg-slate-700/50 p-6 rounded-lg">
                 <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">監視盤</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                   <div className="text-center">
                     <img 
                       src="/images/services/kiki/img10.jpg" 
                       alt="監視盤" 
                       className="w-[400px] mx-auto h-[300px] object-contain rounded-lg"
                     />
                   </div>
                   <div className="text-gray-300 text-xl leading-relaxed">
                     各機器からの信号を受け、場内の駐車状況を把握・監視し、満車判定、案内、表示灯等の制御を行います。
                   </div>
                 </div>
               </div>
             </div>

                         {/* 各種機器セクション */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
               <div className="text-center mb-12">
                 <div className="text-blue-400 mb-4 flex justify-center">
                   <Package className="w-16 h-16" />
                 </div>
                 <h3 className="text-4xl font-bold mb-4 text-white">各種機器</h3>
                 <p className="text-xl text-gray-300 leading-relaxed">
                   看板の見やすさはもちろん、お客さまが安心して安全にご利用いただけるように、各種機器にも細かな配慮をしています。
                 </p>
               </div>
               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               {/* 駐車場セクション */}
                     <div className="bg-slate-700/50 p-6 rounded-lg mb-8">
                       <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">駐車場</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img11.jpg" 
                             alt="事前精算利用シーン" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">事前精算利用シーン</div>
                         </div>
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img12.jpg" 
                             alt="ゲート利用シーン" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">ゲート利用シーン</div>
                         </div>
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img13.jpg" 
                             alt="フラップ利用シーン" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">フラップ利用シーン</div>
                         </div>
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img14.jpg" 
                             alt="タワー式P利用シーン" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">タワー式P利用シーン</div>
                         </div>
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img15.jpg" 
                             alt="非接触ICイメージ" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">非接触ICイメージ</div>
                         </div>
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img16.jpg" 
                             alt="車番設置シーン" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">車番設置シーン</div>
                         </div>
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img17.jpg" 
                             alt="車番設置イメージ" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">車番設置イメージ</div>
                         </div>
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img18.jpg" 
                             alt="工場入門ゲート設置" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">工場入門ゲート設置</div>
                         </div>
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img19.jpg" 
                             alt="RFID設置イメージ" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">RFID設置イメージ</div>
                         </div>
                       </div>
                     </div>

                     {/* 駐輪場セクション */}
                     <div className="bg-slate-700/50 p-6 rounded-lg">
                       <h4 className="text-2xl font-bold mb-6 text-blue-400 text-center">駐輪場</h4>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img20.jpg" 
                             alt="駐輪個別ロック" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">駐輪個別ロック</div>
                         </div>
                         <div className="text-center">
                           <img 
                             src="/images/services/kiki/img21.jpg" 
                             alt="駐輪システムゲート式" 
                             className="w-96 h-auto object-contain rounded-lg mb-3 mx-auto"
                           />
                           <div className="text-gray-300 text-xl">駐輪システムゲート式</div>
                         </div>
                       </div>
                     </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParkingEquipment;
