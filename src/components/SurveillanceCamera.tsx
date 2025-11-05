import React, { useEffect } from 'react';
import { ChevronLeft, Camera, Monitor } from 'lucide-react';

const SurveillanceCamera = () => {
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
            <h2 className="text-2xl sm:text-3xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              監視カメラ
            </h2>
            <p className="text-base sm:text-lg md:text-3xl mb-8 leading-relaxed bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg inline-block">
              高品質な監視システムで安心・安全を提供
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* カメラセクション */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <div className="text-center mb-12">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <Camera className="w-16 h-16" />
                </div>
                <h3 className="text-4xl font-bold mb-4 text-white">カメラ</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  様々な環境に対応する高品質な監視カメラをご提案いたします
                </p>
              </div>

              <div className="space-y-12">
                {/* ワイドダイナミックカメラ */}
                <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
                  <h4 className="text-3xl font-bold mb-6 text-blue-400 text-center">ワイドダイナミックカメラ</h4>
                  
                  {/* 商品画像 */}
                  <div className="mb-8 text-center">
                    <img 
                      src="/images/services/camera/img01.jpg" 
                      alt="ワイドダイナミックカメラ" 
                      className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                    />
                  </div>

                  {/* 特徴カード */}
                  <div className="space-y-6">
                    <div className="bg-slate-600/50 p-6 rounded-lg">
                      <h5 className="text-xl font-semibold mb-4 text-white">特徴</h5>
                      <div className="space-y-4">
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">ワイドダイナミックレンジ54dBを実現</div>
                          <div className="text-gray-300 text-xl">逆光の強いところ、明暗差の激しいところでも、高コントラストの鮮明な映像を映し出します。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">デイナイト機能搭載</div>
                          <div className="text-gray-300 text-xl">照度を自動認識し、低照度になると自動的に高感度白黒映像に切り替わります。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">多彩な機能で幅広い運用が可能</div>
                          <div className="text-gray-300 text-xl">プライバシーマスク、電子感度アップ機能、3DDNR(3次元デジタルノイズリダクション)により、用途に合った運用を実現できます。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">電源重畳／別送式、いずれのシステムにも対応</div>
                          <div className="text-gray-300 text-xl">電源重畳式は同軸ケーブル一本で映像出力・電源供給が行えます。<br />※同時併用はできません。</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ハウジング一体型カメラ（広角タイプ） */}
                <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
                  <h4 className="text-3xl font-bold mb-6 text-blue-400 text-center">ハウジング一体型カメラ（広角タイプ）</h4>
                  
                  {/* 商品画像 */}
                  <div className="mb-8 text-center">
                    <img 
                      src="/images/services/camera/img02.jpg" 
                      alt="ハウジング一体型カメラ（広角タイプ）" 
                      className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                    />
                  </div>

                  {/* 特徴カード */}
                  <div className="space-y-6">
                    <div className="bg-slate-600/50 p-6 rounded-lg">
                      <h5 className="text-xl font-semibold mb-4 text-white">特徴</h5>
                      <div className="space-y-4">
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">カメラ・レンズ・ハウジングが一体となったカメラ</div>
                          <div className="text-gray-300 text-xl">IP66準拠により、カメラのみで屋外に設置できます。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">壁面取り付けブラケット付属</div>
                          <div className="text-gray-300 text-xl">ブラケット付属なので、そのまま壁面に設置できます。<br />※天井に設置する場合、別途カメラブラケットが必要となります。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">電源重畳／別送式、いずれのシステムにも対応</div>
                          <div className="text-gray-300 text-xl">電源重畳は同軸ケーブル一本で映像出力・電源供給が行えます。<br />※同時併用はできません。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">超広角バリフォーカルレンズ搭載（SCL-460W）</div>
                          <div className="text-gray-300 text-xl">電源重畳は同軸ケーブル一本で映像出力・電源供給が行えます。<br />※同時併用はできません。</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 高画質38万画素カラードームカメラ */}
                <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
                  <h4 className="text-3xl font-bold mb-6 text-blue-400 text-center">高画質38万画素カラードームカメラ</h4>
                  
                  {/* 商品画像 */}
                  <div className="mb-8 text-center">
                    <img 
                      src="/images/services/camera/img03.jpg" 
                      alt="高画質38万画素カラードームカメラ" 
                      className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                    />
                  </div>

                  {/* 特徴カード */}
                  <div className="space-y-6">
                    <div className="bg-slate-600/50 p-6 rounded-lg">
                      <h5 className="text-xl font-semibold mb-4 text-white">特徴</h5>
                      <div className="space-y-4">
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">水平解像度540TV本を実現</div>
                          <div className="text-gray-300 text-xl">高解像度、鮮明な画像を映し出します。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">3軸調整機能搭載</div>
                          <div className="text-gray-300 text-xl">レンズ角度が3軸方向に調整可能なので、天井・壁面を問わず設置できます。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">レンズ調整用、モニター出力コネクタ搭載</div>
                          <div className="text-gray-300 text-xl">現場設置・調整の時間・コストを大幅に削減します。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">電源重畳／別送式、いずれのシステムにも対応</div>
                          <div className="text-gray-300 text-xl">電源重畳式は同軸ケーブル一本で映像出力・電源供給が行えます。<br />※同時併用はできません。</div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">超広角バリフォーカルレンズ搭載（SDC-4510）</div>
                          <div className="text-gray-300 text-xl">最大画角約108度（水平）の撮影が可能です。</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 他のカメラカードは後で追加予定 */}
              </div>
            </div>

            {/* デジタルレコーダーセクション */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <div className="text-center mb-12">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <Monitor className="w-16 h-16" />
                </div>
                <h3 className="text-4xl font-bold mb-4 text-white">デジタルレコーダー</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  高画質・長時間記録に対応するデジタルレコーダーをご提案いたします
                </p>
              </div>

              <div className="space-y-12">
                {/* 4chデジタルレコーダー */}
                <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
                  <h4 className="text-3xl font-bold mb-6 text-blue-400 text-center">4chデジタルレコーダー</h4>
                  
                  {/* 商品画像 */}
                  <div className="mb-8 text-center">
                    <img 
                      src="/images/services/camera/img04.jpg" 
                      alt="4chデジタルレコーダー" 
                      className="w-full max-w-[864px] mx-auto h-auto md:h-[432px] object-contain rounded-lg"
                    />
                  </div>

                  {/* 特徴カード */}
                  <div className="space-y-6">
                    <div className="bg-slate-600/50 p-6 rounded-lg">
                      <h5 className="text-xl font-semibold mb-4 text-white">特徴</h5>
                      <div className="space-y-4">
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">多機能・高信頼</div>
                          <div className="text-gray-300 text-xl">
                            ・全CH合計120ipsの記録が可能。（解像度を最高解像度にした場合60ipsとなります）<br />
                            ・H.264圧縮方式を採用。従来以上の高画質・長時間記録が可能になります。<br />
                            ・S.M.A.R.T機能、自己診断機能により、機器の状態をチェックできます。
                          </div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">導入のしやすさ、使いやすさ</div>
                          <div className="text-gray-300 text-xl">
                            ・カレンダー検索、日時指定検索、イベント検索等の多彩な検索機能により、見たい映像をすばやく検索できます。<br />
                            ・USBフラッシュメモリへのバックアップが可能です。バックアップデータはWindowsパソコンで再生できます。再生ソフトのインストールは不要です。<br />
                            （1回でバックアップできるファイルサイズは2GBまでです）<br />
                            ・USBマウスによる操作も可能です。
                          </div>
                        </div>
                        <div>
                          <div className="text-blue-400 font-semibold text-xl mb-2">様々なニーズ・仕様への適合性</div>
                          <div className="text-gray-300 text-xl">
                            ・「解像度」「画質」「ips（録画コマ数）」「イベント」「スケジュール」等を各カメラごとに設定でき、様々な状況の録画に対応できます。<br />
                            ・イベント発生時、機器異常時等に指定されたアドレスへメール通知することが可能です。<br />
                            （1回でバックアップできるファイルサイズは2GBまでです）<br />
                            ・遠隔監視ソフト RASplus を同梱。Windowsパソコンにインストールすることにより、IPネットワーク経由で遠隔地にあるデジタルレコーダーの管理、監視、検索が可能です。<br />
                            ・軽量、コンパクト設計で設置場所を選びません。<br />
                            ・USBフラッシュメモリを同梱。記録映像をすぐにバックアップできます。
                          </div>
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

export default SurveillanceCamera;
