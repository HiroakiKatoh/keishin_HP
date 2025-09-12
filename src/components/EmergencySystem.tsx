import React, { useEffect } from 'react';
import { ChevronLeft, Phone, AlertTriangle } from 'lucide-react';

const EmergencySystem = () => {
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
              緊急通報システム
            </h2>
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
              安心・安全な緊急時対応システムを提供
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* 緊急通報システム おまかせシリーズセクション */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <div className="text-center mb-12">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <Phone className="w-16 h-16" />
                </div>
                <h3 className="text-4xl font-bold mb-4 text-white">緊急通報システム おまかせシリーズ</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  緊急時の迅速な対応を実現する高信頼性システム
                </p>
              </div>

              <div className="space-y-12">
                {/* おまかせコールKS-55 mini 4G */}
                <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
                  <h4 className="text-3xl font-bold mb-6 text-blue-400 text-center">おまかせコールKS-55 mini 4G</h4>
                  
                  {/* 商品画像 */}
                  <div className="mb-8 text-center">
                    <img 
                      src="/images/services/phone/img01.png" 
                      alt="おまかせコールKS-55 mini 4G" 
                      className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                    />
                  </div>

                  {/* 特徴カード */}
                  <div className="space-y-6">
                    <div className="bg-slate-600/50 p-6 rounded-lg">
                      <h5 className="text-xl font-semibold mb-4 text-white">特徴</h5>
                      <div className="space-y-4">
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">通話機能</div>
                          <div className="text-gray-300 text-xl">通話のみ、通話先3ヶ所限定（運用中の通話先変更は可）</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">通報先設定</div>
                          <div className="text-gray-300 text-xl">SMSにて設定、音声ガイダンスの変更不可</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">オプション機能</div>
                          <div className="text-gray-300 text-xl">機器制御等の信号を遠隔で2接点出力、異常入力ありタイプ基盤販売中、タイマーによる時間帯切替</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">キャリア</div>
                          <div className="text-gray-300 text-xl">NTTモバイルLTE（内蔵UIMカード）</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* おまかせピッピKS-50 mini 4G */}
                <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
                  <h4 className="text-3xl font-bold mb-6 text-blue-400 text-center">おまかせピッピKS-50 mini 4G</h4>
                  
                  {/* 商品画像 */}
                  <div className="mb-8 text-center">
                    <img 
                      src="/images/services/phone/img02.png" 
                      alt="おまかせピッピKS-50 mini 4G" 
                      className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                    />
                  </div>

                  {/* 特徴カード */}
                  <div className="space-y-6">
                    <div className="bg-slate-600/50 p-6 rounded-lg">
                      <h5 className="text-xl font-semibold mb-4 text-white">特徴</h5>
                      <div className="space-y-4">
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">音声機能</div>
                          <div className="text-gray-300 text-xl">音声のみ（インターホン型）、通話先3ヶ所限定（運用中の通話先変更は可）</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">通報先設定</div>
                          <div className="text-gray-300 text-xl">SMSにて設定</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">オプション機能</div>
                          <div className="text-gray-300 text-xl">機器制御等の信号を遠隔で2接点出力、異常入力ありタイプ基盤販売中、タイマーによる時間帯切替</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">キャリア</div>
                          <div className="text-gray-300 text-xl">NTTモバイルLTE（内蔵UIMカード）</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 緊急通報システム おまかせコールEYE KS-100セクション */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <div className="text-center mb-12">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <AlertTriangle className="w-16 h-16" />
                </div>
                <h3 className="text-4xl font-bold mb-4 text-white">緊急通報システム おまかせコールEYE KS-100</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  視覚的確認機能付き緊急通報システム
                </p>
              </div>

              <div className="space-y-12">
                {/* おまかせコールEYE KS-100 */}
                <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
                  <h4 className="text-3xl font-bold mb-6 text-blue-400 text-center">おまかせコールEYE KS-100</h4>
                  
                                     {/* 商品画像 */}
                   <div className="mb-8 text-center">
                     <img 
                       src="/images/services/phone/img03.png" 
                       alt="おまかせコールEYE KS-100" 
                       className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                     />
                   </div>

                                     {/* 特徴カード */}
                   <div className="space-y-6">
                     <div className="bg-slate-600/50 p-6 rounded-lg">
                       <h5 className="text-xl font-semibold mb-4 text-white">特徴</h5>
                       <div className="space-y-4">
                         <div>
                           <div className="text-blue-400 font-semibold text-xl mb-2">駐車場の管理・運営をバックアップ</div>
                           <div className="text-gray-300 text-xl">緊急通報システム装置とネットワークカメラ装置を一体化した製品です。操作性はもちろん、「おまかせシリーズ」従来の基本機能を残しつつ、更なる進化を実現し、駐車場の管理・運営を力強くバックアップいたします。</div>
                         </div>
                         <div>
                           <div className="text-blue-400 font-semibold text-xl mb-2">IP電話回線採用で低コストを実現</div>
                           <div className="text-gray-300 text-xl">IPネットワークを活用することで、音声通話、異常信号、映像送信などの複数の回線を「わずか1回線」で実現しました。通信費を一本化することにより、低コストの運営に繋がります。通話先は最大3件まで登録可能です。</div>
                         </div>
                         <div>
                           <div className="text-blue-400 font-semibold text-xl mb-2">異変を素早くお知らせ！システム異常通知メール</div>
                           <div className="text-gray-300 text-xl">システムの異常が発生すると予め設定されているメールアドレスに自動送信されます。設備の異変などへの素早い対応に繋げることで管理・運営・利用者の安心づくりに貢献します。外部信号は最大7種類、メールアドレスは最大3件まで登録可能です。</div>
                         </div>
                         <div>
                           <div className="text-blue-400 font-semibold text-xl mb-2">インターネットブラウザで簡単・一括管理</div>
                           <div className="text-gray-300 text-xl">カメラ映像の確認や保存、遠隔操作、異常通報など、1つのブラウザで管理できます。また、音声通話の通話先や異常通知のメール通報先なども簡単容易に変更が可能です。</div>
                         </div>
                         <div>
                           <div className="text-blue-400 font-semibold text-xl mb-2">どこからでも確認可能！ネットワークカメラ搭載</div>
                           <div className="text-gray-300 text-xl">安心・安全の確保、トラブル時の監視、周辺状況の映像確認、お客様との対面通話など、パソコンやタブレット、スマートフォンから「いつでも！どこでも！」確認でき、約2週間分の録画が可能、再生はもちろん保存もできます。また、無線でネットワークに接続するWifiを搭載しておりますので、インターネット回線がない環境でもご利用頂けます。※全国Wifi通信エリア対応</div>
                         </div>
                       </div>
                     </div>
                     
                                           {/* システム構成カード */}
                      <div className="bg-slate-600/50 p-6 rounded-lg">
                        <h5 className="text-xl font-semibold mb-4 text-white">システム構成</h5>
                        <div className="mb-6 text-center">
                          <img 
                            src="/images/services/phone/img04.png" 
                            alt="おまかせコールEYE KS-100 システム構成" 
                            className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                          />
                        </div>
                      </div>
                      
                      {/* 製品仕様カード */}
                      <div className="bg-slate-600/50 p-6 rounded-lg">
                        <h5 className="text-xl font-semibold mb-6 text-white">製品仕様</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">型式</div>
                            <div className="text-gray-300 text-base">KS-100（おまかせコールEYE）</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">適用回線</div>
                            <div className="text-gray-300 text-base">NTT docomo LTE</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">接続インターフェイス</div>
                            <div className="text-gray-300 text-base">インターホン×1、リレー接点×2、外部入力接点×7、LAN端子×6</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">接続ポート</div>
                            <div className="text-gray-300 text-base">プッシュ式端子台、RJ45（ネットワークカメラ用）</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">呼制御プロトコル</div>
                            <div className="text-gray-300 text-base">SIP（RFC2833準拠）</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">対応プロトコル</div>
                            <div className="text-gray-300 text-base">TCP,UDP,HTTP,HTTPS,RTSP,RTP,RTP/RTCP,FTP,SMTP,DHCP,DNS,DDNS,NTP</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">使用電源</div>
                            <div className="text-gray-300 text-base">AC 100V</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">寸法</div>
                            <div className="text-gray-300 text-base">H511.4×W430×D162（㎜）</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">重量</div>
                            <div className="text-gray-300 text-base">約9.1kg</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">消費電力</div>
                            <div className="text-gray-300 text-base">MAX 100W（カメラ未接続時）</div>
                          </div>
                          <div className="bg-slate-700/50 p-4 rounded-lg">
                            <div className="text-blue-400 font-semibold text-lg mb-2">環境条件</div>
                            <div className="text-gray-300 text-base">本体：-5～60℃、Wifi：5～35℃、LAN：0～40℃</div>
                          </div>
                        </div>
                      </div>
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

export default EmergencySystem;
