'use client';
import { useState } from 'react';

export default function Home() {
  const [points, setPoints] = useState<number>(50);

  const costRules = {
    text: 10,
    image: 50,
    video: 200
  };

  const packages = [
    { name: "标准版", price: "49元", points: 1000, desc: "个人轻度使用" },
    { name: "专业版", price: "199元", points: 5000, desc: "高频创作者" },
    { name: "旗舰版", price: "599元", points: 8000, desc: "团队商业使用" }
  ];

  const handleGenerate = (type: keyof typeof costRules) => {
    const cost = costRules[type];
    if (points < cost) {
      alert(`积分不足！需要${cost}积分，请充值`);
      return;
    }
    setPoints(points - cost);
    alert(`✅ 生成成功！消耗${cost}积分，剩余${points - cost}积分`);
  };

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '8px' }}>
          登录/注册
        </button>
      </header>

      <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>AI广告生成工具</h1>

      <div style={{ background: '#f5f7fa', padding: '12px 16px', borderRadius: '10px', margin: '15px 0' }}>
        <strong>当前积分：{points}</strong>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        <button
          onClick={() => handleGenerate('text')}
          style={{ flex: 1, padding: '12px', background: '#0071e3', color: 'white', border: 'none', borderRadius: '8px' }}
        >
          文案<br/>10积分
        </button>
        <button
          onClick={() => handleGenerate('image')}
          style={{ flex: 1, padding: '12px', background: '#0071e3', color: 'white', border: 'none', borderRadius: '8px' }}
        >
          图片<br/>50积分
        </button>
        <button
          onClick={() => handleGenerate('video')}
          style={{ flex: 1, padding: '12px', background: '#0071e3', color: 'white', border: 'none', borderRadius: '8px' }}
        >
          视频<br/>200积分
        </button>
      </div>

      <h2 style={{ marginBottom: '10px' }}>充值套餐</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {packages.map((pkg, index) => (
          <div key={index} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <strong>{pkg.name}</strong>
                <div>{pkg.points} 积分</div>
                <div style={{ fontSize: '12px', color: '#666' }}>{pkg.desc}</div>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0071e3' }}>
                {pkg.price}
              </div>
            </div>
            <button
              onClick={() => alert(`请支付${pkg.price}，充值${pkg.points}积分`)}
              style={{ width: '100%', marginTop: '10px', padding: '10px', background: '#0071e3', color: 'white', border: 'none', borderRadius: '8px' }}
            >
              立即购买
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
