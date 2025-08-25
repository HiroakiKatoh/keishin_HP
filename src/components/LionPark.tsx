import React from 'react';
import { Building2, ChevronLeft, TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';

const LionPark = () => {
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
              <Building2 className="w-8 h-8 text-blue-400" />
              <h1 className="text-xl font-bold text-white">株式会社ケイシン</h1>
            </div>
            <button onClick={goBack} className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span>戻る</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Title and Subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              土地活用でお悩みなら、<br />
              安心のライオンパークへ!
            </h2>
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
              ライオンパークは、株式会社ケイシンのブランドです。
            </p>
          </div>

          {/* Key Messages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <TrendingUp className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">安定収入</h3>
                <p className="text-gray-300 text-xl">毎月固定の賃料で安定した収入を実現</p>
              </div>
            </div>
            
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <Clock className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">短期契約OK</h3>
                <p className="text-gray-300 text-xl">建設予定・売却予定の土地でも短期契約可能</p>
              </div>
            </div>
            
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <DollarSign className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">設備費用は弊社負担</h3>
                <p className="text-gray-300 text-xl">駐車場機器・設備費用は弊社が負担</p>
              </div>
            </div>
            
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className="text-blue-400 mb-4 flex justify-center">
                  <Shield className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">面倒な運営はお任せください</h3>
                <p className="text-gray-300 text-xl">管理・運営からトラブル処理まで弊社で対応</p>
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="space-y-12">
            {/* 土地活用としての駐車場経営 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <h3 className="text-3xl font-bold mb-6 text-white">土地活用としての駐車場経営</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                土地活用や資産活用には様々な方法がございます。その選択肢の1つとして駐車場経営が近年注目されています。
              </p>
              
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <div className="space-y-6">
                   <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 h-96 flex flex-col">
                     <div className="mb-4 flex-shrink-0">
                       <img 
                         src="/images/services/lion-park/img01.jpg" 
                         alt="フラップ式駐車場" 
                         className="w-full h-40 object-cover rounded-lg border border-slate-500"
                       />
                     </div>
                                           <div className="flex-1 flex flex-col">
                        <h4 className="text-xl font-semibold mb-3 text-blue-400">フラップ式駐車場</h4>
                        <p className="text-gray-300 text-xl mb-3 flex-1">
                          車輛1台ごとに車止め（フラップ）がかかりロックされる最もスタンダードなタイプです。通常、1台～20台前後の駐車スペースに導入します。
                        </p>
                      </div>
                   </div>
                   
                   <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 h-96 flex flex-col">
                     <div className="mb-4 flex-shrink-0">
                       <img 
                         src="/images/services/lion-park/img02.jpg" 
                         alt="ゲート式駐車場" 
                         className="w-full h-40 object-cover rounded-lg border border-slate-500"
                       />
                     </div>
                     <div className="flex-1 flex flex-col">
                       <h4 className="text-xl font-semibold mb-3 text-blue-400">ゲート式駐車場</h4>
                       <p className="text-gray-300 text-xl mb-3 flex-1">
                         出入口のゲートを設置した駐車場です。
                       </p>
                       <p className="text-gray-300 text-xl mt-auto">
                         通常、20台以上の駐車スペースに導入します。一般利用者と月極契約者の併用が可能で空きスペースの有効活用に適してます。
                       </p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="space-y-6">
                   <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 h-96 flex flex-col">
                     <div className="mb-4 flex-shrink-0">
                       <img 
                         src="/images/services/lion-park/img03.jpg" 
                         alt="自走式駐車場" 
                         className="w-full h-40 object-cover rounded-lg border border-slate-500"
                       />
                     </div>
                                           <div className="flex-1 flex flex-col">
                        <h4 className="text-xl font-semibold mb-3 text-blue-400">自走式駐車場</h4>
                        <p className="text-gray-300 text-xl mb-3 flex-1">
                          階層化した駐車場で、駐車スペースまで運転し、駐車するタイプです。分類としてはゲート式駐車場に含まれます。
                        </p>
                      </div>
                   </div>
                   
                   <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 h-96 flex flex-col">
                     <div className="mb-4 flex-shrink-0">
                       <img 
                         src="/images/services/lion-park/img04.jpg" 
                         alt="チェーンゲート" 
                         className="w-full h-40 object-cover rounded-lg border border-slate-500"
                       />
                     </div>
                     <div className="flex-1 flex flex-col">
                       <h4 className="text-xl font-semibold mb-3 text-blue-400">チェーンゲート</h4>
                       <p className="text-gray-300 text-xl mb-3 flex-1">
                         入出場共にリモコン操作で鎖を下げます。車両通過後はセンサーで感知して鎖が自動上昇します。
                       </p>
                       <p className="text-gray-300 text-xl mt-auto">
                         専用リモコンを持っていないと進入できないので、マンションや月極駐車場等で使用し無断駐車を防ぎます。
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* 駐車場導入までの流れ */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <h3 className="text-3xl font-bold mb-6 text-white">駐車場導入までの流れ</h3>
              
              <div className="space-y-6">
                <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">1. お問合せ・ご相談、その他、土地（既存駐車場など）の情報収集</h4>
                  <p className="text-gray-300 text-xl">
                    有効活用としての駐車場経営をお考えのオーナー様からのお問合わせや、不動産会社や銀行等からの情報提供や巡回調査により駐車場用地の情報を収集します。
                  </p>
                </div>
                
                <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">2. 候補地周辺の市場及び実態調査</h4>
                  <p className="text-gray-300 text-xl">
                    各地域の利用台数・月極料金等の綿密なマーケティングを行い、地域環境、立地特性、需要特性などを調査します。
                  </p>
                </div>
                
                <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">3. 候補地に適した駐車場タイプの選定</h4>
                  <p className="text-gray-300 text-xl">
                    土地の形状や施設の状況等、また、安全性や利用性を考慮し、数多くの駐車場タイプの中から、どのタイプが最適であるかを判断します。
                  </p>
                </div>
                
                <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">4. 候補地の収支シミュレーション</h4>
                  <p className="text-gray-300 text-xl">
                    1日あたりの売上予想から、月間・年間の収益をシミュレーションします。
                  </p>
                </div>
                
                <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">5. ご提案・ご契約</h4>
                  <p className="text-gray-300 text-xl">
                    シミュレーションを基に最適な駐車場レイアウトや毎月の賃料をご提案。詳しくご説明の上、合意を得られましたらご契約となります。
                  </p>
                </div>
                
                <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">6. 駐車場オープン</h4>
                  <p className="text-gray-300 text-xl">
                    ご契約後は、駐車場機器や看板等の設置工事を弊社にて行います。同時にオープン事前告知などの宣伝活動を行い集客ＵＰにつなげます。
                  </p>
                  <p className="text-gray-300 text-xl mt-3">
                    通常、ご契約から約４週間前後でのオープンとなり、賃料はオープン日から発生致します。
                  </p>
                </div>
              </div>
            </div>

            {/* 駐車場に関する業務 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <h3 className="text-3xl font-bold mb-6 text-white">駐車場に関する業務（例）</h3>
              
              {/* 業務説明画像 */}
                             <div className="mb-12 text-center">
                 <img 
                   src="/images/services/lion-park/img05.jpg" 
                   alt="駐車場業務の様子" 
                   className="w-[864px] mx-auto h-[432px] object-contain rounded-xl"
                 />
               </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                                     <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                     <h4 className="text-xl font-semibold mb-2 text-blue-400">1. 全体管理</h4>
                     <p className="text-gray-300 text-xl">駐車場内に関する一切の苦情・トラブル対応</p>
                   </div>
                   
                   <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                     <h4 className="text-xl font-semibold mb-2 text-blue-400">2. 集金</h4>
                     <p className="text-gray-300 text-xl">月４回 回収業務<br />月１回 納金<br />月１回 月報報告</p>
                   </div>
                   
                   <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                     <h4 className="text-xl font-semibold mb-2 text-blue-400">3. 清掃</h4>
                     <p className="text-gray-300 text-xl">週１回 清掃業務<br />ゴミ拾い 空き缶回収</p>
                   </div>
                   
                   <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                     <h4 className="text-xl font-semibold mb-2 text-blue-400">4. 警備保障</h4>
                     <p className="text-gray-300 text-xl">２４時間トラブル対応と現地出動<br />ご利用客対応・信号受信と遠隔操作</p>
                   </div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                     <h4 className="text-xl font-semibold mb-2 text-blue-400">5. 保守業務</h4>
                     <p className="text-gray-300 text-xl">定期保守(年３回)<br />緊急修理</p>
                   </div>
                   
                   <div className="bg-slate-700/50 p-4 rounded-xl border-slate-600">
                     <h4 className="text-xl font-semibold mb-2 text-blue-400">6. 月極管理</h4>
                     <p className="text-gray-300 text-xl">月極がある場合 賃貸契約<br />契約書作成(手数料別途）</p>
                   </div>
                   
                   <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                     <h4 className="text-xl font-semibold mb-2 text-blue-400">7. データ管理</h4>
                     <p className="text-gray-300 text-xl">駐車データをチェックしどこの時間帯が空きスペースが多いか少ないかを見ます。</p>
                   </div>
                   
                   <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600">
                     <h4 className="text-xl font-semibold mb-2 text-blue-400">8. 収益管理</h4>
                     <p className="text-gray-300 text-xl">在庫を徹底的に調べ在庫台数が少ない時間帯を有効的に使えるようにして利益収集いたします。</p>
                   </div>
                </div>
              </div>
            </div>

            {/* 駐車場の契約形態 */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600">
              <h3 className="text-3xl font-bold mb-6 text-white">駐車場の契約形態</h3>
              
              <div className="space-y-8">
                                 {/* 契約形態① */}
                                   <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                                       <h4 className="text-2xl font-semibold mb-4 text-blue-400">一括借上げ方式 短期借上げ方式➀</h4>
                   
                                                                               {/* 契約形態①の説明画像 */}
                                        <div className="mb-8 text-center">
                                                                                     <img 
                                             src="/images/services/lion-park/img06.png" 
                                             alt="一括借上げ方式 短期借上げ方式➀の説明" 
                                             className="w-[864px] mx-auto h-[432px] object-contain rounded-lg"
                                           />
                                        </div>
                   
                                      <div className="space-y-4 mb-6">
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット1</div>
                       <div className="text-gray-300 text-xl">売上に関係なく毎月固定賃料でお借上げの為、安定した収入を実現。</div>
                     </div>
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット2</div>
                       <div className="text-gray-300 text-xl">建設予定、売却予定の土地でも短期契約での有効活用が可能。</div>
                     </div>
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット3</div>
                       <div className="text-gray-300 text-xl">駐車場運営の為の機器及び設備費用は弊社が負担（一部は除く）。</div>
                     </div>
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット4</div>
                       <div className="text-gray-300 text-xl">管理・運営から事故トラブル処理まで弊社で責任をもって対応。</div>
                     </div>
                   </div>
                  
                                     <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h6 className="text-xl font-semibold mb-2 text-white">■収支構造</h6>
                     <p className="text-gray-300 text-xl">
                       弊社収支基準に従って算出したシミュレーションからオーナー様へお支払いする賃料をご提案。
                       オーナー様の利益計画に極力変更が生じないよう最善のご提案をさせて頂きます。
                     </p>
                   </div>
                   
                   {/* 収支構造の説明画像 */}
                   <div className="mt-6 text-center">
                                           <img 
                        src="/images/services/lion-park/img07.png" 
                        alt="一括借上げ方式 短期借上げ方式➀の収支構造説明" 
                        className="w-[864px] mx-auto h-[432px] object-contain rounded-lg"
                      />
                   </div>
                </div>

                                 {/* 契約形態② */}
                                   <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                                       <h4 className="text-2xl font-semibold mb-4 text-blue-400">一括借上げ方式 短期借上げ方式➁</h4>
                   
                                       {/* 契約形態②の説明画像 */}
                                       <div className="mb-8 text-center">
                                                                                   <img 
                                            src="/images/services/lion-park/img08.png" 
                                            alt="一括借上げ方式 短期借上げ方式➁の説明" 
                                            className="w-[864px] mx-auto h-[432px] object-contain rounded-lg"
                                          />
                                       </div>
                   
                                      <div className="space-y-4 mb-6">
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット1</div>
                       <div className="text-gray-300 text-xl">固定収入に加え、売上増加に伴いオーナー様への分配率も増加。</div>
                     </div>
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット2</div>
                       <div className="text-gray-300 text-xl">弊社で蓄積した運営ノウハウの導入による売上向上支援。</div>
                     </div>
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット3</div>
                       <div className="text-gray-300 text-xl">事務処理の代行によるオーナー様負担の軽減。</div>
                     </div>
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット4</div>
                       <div className="text-gray-300 text-xl">集金・清掃・メンテナンス、事故トラブル処理まで弊社で責任をもって対応。</div>
                     </div>
                   </div>
                  
                                     <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h6 className="text-xl font-semibold mb-2 text-white">■収支構造</h6>
                     <p className="text-gray-300 text-xl">
                       通常、運営に掛かる管理費（管理手数料）が毎月固定でご負担頂きます。
                       また、一定の売上目標（ベース売上）を設定し、その売上超えた場合は成功報酬として、ベース売上超過分をオーナー様と弊社にて分配（分配率は協議のうえ決定）させて頂きます。
                     </p>
                   </div>
                   
                   {/* 収支構造の説明画像 */}
                   <div className="mt-6 text-center">
                     <img 
                       src="/images/services/lion-park/img09.png" 
                       alt="一括借上げ方式 短期借上げ方式➁の収支構造説明" 
                       className="w-[864px] mx-auto h-[432px] object-contain rounded-lg"
                     />
                   </div>
                </div>

                                 {/* 契約形態③ */}
                 <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
                                      <h4 className="text-2xl font-semibold mb-4 text-blue-400">管理受託方式</h4>
                   
                                                                             {/* 契約形態③の説明画像 */}
                                       <div className="mb-8 text-center">
                                                                                   <img 
                                            src="/images/services/lion-park/img10.png" 
                                            alt="管理受託方式の説明" 
                                            className="w-[864px] mx-auto h-[432px] object-contain rounded-lg"
                                          />
                                       </div>
                   
                                      <div className="space-y-4 mb-6">
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット1</div>
                       <div className="text-gray-300 text-xl">駐車場運営に関わる業務の全部または一部を代行。</div>
                     </div>
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット2</div>
                       <div className="text-gray-300 text-xl">売上はすべてオーナー様の収益。</div>
                     </div>
                     <div>
                       <div className="text-blue-400 font-semibold text-xl mb-2">メリット3</div>
                       <div className="text-gray-300 text-xl">集金・清掃・メンテナンス等の煩わしい業務を軽減。</div>
                     </div>
                   </div>
                  
                                     <div className="bg-slate-600/50 p-4 rounded-lg">
                     <h6 className="text-xl font-semibold mb-2 text-white">■収支構造</h6>
                     <p className="text-gray-300 text-xl">
                       駐車場の緊急対応や機器のメンテナンス、集金・清掃業務等、運営状況に応じたオペレーションをご提案。無駄のない運用でオーナー様のコスト削減を実現致します。
                     </p>
                   </div>
                   
                   {/* 収支構造の説明画像 */}
                   <div className="mt-6 text-center">
                                           <img 
                        src="/images/services/lion-park/img11.png" 
                        alt="管理受託方式の収支構造説明" 
                        className="w-[864px] mx-auto h-[432px] object-contain rounded-lg"
                      />
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

export default LionPark;
