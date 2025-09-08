// お問い合わせフォームのメール送信API（フォールバック機能付き）
export interface ContactFormData {
  inquiryType: string;
  companyName: string;
  name: string;
  email: string;
  phone: string;
  fax: string;
  prefecture: string;
  address: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // お問合せ項目のラベルマッピング
    const inquiryTypeLabels: { [key: string]: string } = {
      'general': '全般的なお問い合わせ',
      'parking-system': '「駐車場システム」及び「ゲートシステム」に関するお問い合わせ',
      'bicycle-system': '「駐輪場システム」に関するお問い合わせ',
      'parking-business': '「駐車場事業」に関するお問い合わせ',
      'lion-park': '「ライオンパーク」に関するお問い合わせ',
      'phs-card': '「PHSカード版緊急通信・制御装置」に関するお問い合わせ',
      'pc-monitoring': '「PC版遠隔監視・録画・制御システム」に関するお問い合わせ',
      'parking-software': '「駐車場管理ソフト」に関するお問い合わせ',
      'other': 'その他のお問い合わせ'
    };

    const prefectureLabels: { [key: string]: string } = {
      'hokkaido': '北海道', 'aomori': '青森県', 'iwate': '岩手県', 'akita': '秋田県',
      'miyagi': '宮城県', 'yamagata': '山形県', 'fukushima': '福島県', 'tochigi': '栃木県',
      'gunma': '群馬県', 'ibaraki': '茨城県', 'saitama': '埼玉県', 'tokyo': '東京都',
      'chiba': '千葉県', 'kanagawa': '神奈川県', 'yamanashi': '山梨県', 'nagano': '長野県',
      'niigata': '新潟県', 'toyama': '富山県', 'ishikawa': '石川県', 'fukui': '福井県',
      'shizuoka': '静岡県', 'gifu': '岐阜県', 'aichi': '愛知県', 'mie': '三重県',
      'shiga': '滋賀県', 'kyoto': '京都府', 'osaka': '大阪府', 'hyogo': '兵庫県',
      'nara': '奈良県', 'wakayama': '和歌山県', 'tokushima': '徳島県', 'kagawa': '香川県',
      'ehime': '愛媛県', 'kochi': '高知県', 'tottori': '鳥取県', 'shimane': '島根県',
      'okayama': '岡山県', 'hiroshima': '広島県', 'yamaguchi': '山口県', 'fukuoka': '福岡県',
      'saga': '佐賀県', 'nagasaki': '長崎県', 'oita': '大分県', 'kumamoto': '熊本県',
      'miyazaki': '宮崎県', 'kagoshima': '鹿児島県', 'okinawa': '沖縄県'
    };

    // メール送信用のデータを準備（Outlook対応）
    const subject = `【お問い合わせ】${inquiryTypeLabels[formData.inquiryType] || formData.inquiryType}`;
    
    // Outlookでの文字化けを防ぐため、シンプルな文字列を使用
    const body = `お問い合わせ内容：

■お問合せ項目
${inquiryTypeLabels[formData.inquiryType] || formData.inquiryType}

■会社名
${formData.companyName || '未記入'}

■お名前
${formData.name}

■メールアドレス
${formData.email}

■電話番号
${formData.phone || '未記入'}

■FAX番号
${formData.fax || '未記入'}

■ご住所
${formData.prefecture ? prefectureLabels[formData.prefecture] || formData.prefecture : '未記入'}
${formData.address || '未記入'}

■お問合せ内容
${formData.message || '未記入'}

---
このメールは株式会社ケイシンのホームページから送信されました。
送信日時: ${new Date().toLocaleString('ja-JP')}`;

    // メール送信リンクを作成（Outlook対応）
    // Outlookでの文字化けを防ぐため、より適切なエンコーディングを使用
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    // Outlook対応のmailtoリンクを作成
    const mailtoLink = `mailto:keishin19790702@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
    
    // メールクライアントを開く
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      // mailto:が失敗した場合の代替手段
      console.warn('mailto:リンクが開けませんでした:', error);
      
      // クリップボードにコピーしてユーザーに案内
      if (navigator.clipboard) {
        navigator.clipboard.writeText(body).then(() => {
          alert('メールクライアントが開けませんでした。メール本文をクリップボードにコピーしました。\n\n宛先: keishin19790702@gmail.com\n件名: ' + subject + '\n\nメールクライアントを手動で開いて、本文を貼り付けてください。');
        }).catch(() => {
          // クリップボードも失敗した場合
          alert('メールクライアントが開けませんでした。\n\n宛先: keishin19790702@gmail.com\n件名: ' + subject + '\n\n以下の内容をコピーしてメールに貼り付けてください：\n\n' + body);
        });
      } else {
        // クリップボードAPIが利用できない場合
        alert('メールクライアントが開けませんでした。\n\n宛先: keishin19790702@gmail.com\n件名: ' + subject + '\n\n以下の内容をコピーしてメールに貼り付けてください：\n\n' + body);
      }
    }
    
    return { 
      success: true, 
      message: 'お問い合わせありがとうございます。メールクライアントが開きますので、内容を確認の上送信してください。内容を確認の上、担当者から折り返しご連絡させていただきます。' 
    };

  } catch (error) {
    console.error('メール送信エラー:', error);
    return { 
      success: false, 
      message: '申し訳ございません。メール送信に失敗しました。直接お電話でお問い合わせください。' 
    };
  }
};
