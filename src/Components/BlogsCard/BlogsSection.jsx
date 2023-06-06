
import React from "react";
import { BlogCard } from "./BlogCard";
import styles from './BlogSection.module.css'


// Component for the blogs section
export const BlogsSection = () => {
  const titleData = [
    {
      title: 'Hybrid System',
      subtitle: 'This type of solar power system is the most common one. As the name suggests it is a solar power system that is connected to the home & the electric utility grid. This type of solar power system does not include any storage battery Grid-tied solar systems are generally cheaper and very simple to install. These systems may range from small residential and commercial rooftop systems to large utility-scale solar power stations.',
      imageUrl: 'https://media.licdn.com/dms/image/D4D12AQFItXpZAZu-_w/article-cover_image-shrink_600_2000/0/1667662667220?e=2147483647&v=beta&t=RH3u4nLV2CLluQY0Byo2UU5hjygAgMNwwVVYs_DqhQs',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id posuere tortor. Morbi auctor risus a risus rhoncus, sed fermentum nunc gravida. Aenean laoreet malesuada tortor, non consequat ligula interdum id. Nam malesuada volutpat neque ac bibendum.',
    },
    {
      title: 'On Grid System',
      subtitle: 'Subtitle 2  ipsum dolor sit amet, consectetur adipiscing elit. Integer id po ipsum dolor sit amet, consectetur adipiscing elit. Integer id po ipsum dolor sit amet, consectetur adipiscing elit. Integer id po ',
      imageUrl: 'https://www.solarreviews.com/content/images/blog/off-grid-solar-system-updated.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id posuere tortor. Morbi auctor risus a risus rhoncus, sed fermentum nunc gravida. Aenean laoreet malesuada tortor, non consequat ligula interdum id. Nam malesuada volutpat neque ac bibendum.',
    },
    {
      title: 'Off-Grid System',
      subtitle: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Integer id posuere tortor. Morbi auctor risus a risus rhoncus, sed fermentum nunc gravida. Aenean laoreet malesuada tortor, non consequat ligula interdum id. Nam malesuada volutpat neque ac bibend',
      imageUrl: 'https://media.licdn.com/dms/image/D4D12AQGI4_d0pyuPxw/article-inline_image-shrink_1000_1488/0/1664273114213?e=1691625600&v=beta&t=nK-6g7vhfn4rexR3EhBKkRpVogfVJqja-ZNTGE2b-5k',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id posuere tortor. Morbi auctor risus a risus rhoncus, sed fermentum nunc gravida. Aenean laoreet malesuada tortor, non consequat ligula interdum id. Nam malesuada volutpat neque ac bibendum.',
    },
  ];

  return (
    <div className={styles.container}>
      {titleData.map((data, index) => (
        <BlogCard
          key={index}
          title={data.title}
          subtitle={data.subtitle}
          imageUrl={data.imageUrl}
          content={data.content}
        />
      ))}
    </div>
  );
};
