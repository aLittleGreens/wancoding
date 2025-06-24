---
sidebar_position: 21
---
# 第21天：爬虫实战 - 获取豆瓣电影Top250

## 一、功能简介
本项目通过 Python 爬虫，自动抓取豆瓣电影 Top250 的电影名称和评分，并将结果保存为 CSV 文件，便于后续分析和处理。

## 二、环境依赖
- Python 3.x
- requests
- beautifulsoup4

安装依赖：
```bash
pip install requests beautifulsoup4
```

## 三、核心代码讲解

### 1. 目标网址与请求头
```python
BASE_URL = "https://movie.douban.com/top250?start={}&filter="
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}
```
- `BASE_URL`：豆瓣 Top250 的分页 URL 模板。
- `HEADERS`：伪装浏览器请求，防止被反爬虫。

### 2. 爬取主逻辑
```python
def fetch_douban_top250():
    for page in range(10):
        url = BASE_URL.format(page * 25)
        print(f"正在爬取第{page+1}页: {url}")
        try:
            response = requests.get(url, headers=HEADERS, timeout=10)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, "html.parser")
            items = soup.find_all("div", class_="item")
            for item in items:
                title = item.find("span", class_="title").text.strip()
                rating = item.find("span", class_="rating_num").text.strip()
                movies.append([title, rating])
        except Exception as e:
            print(f"爬取失败: {e}")
        time.sleep(1)  # 避免请求过快被封禁
```
- 循环 10 页，每页 25 部电影。
- 解析 HTML，提取电影名称和评分。
- 每次请求后暂停 1 秒，降低被封风险。

### 3. 保存为 CSV 文件
```python
def save_to_csv(filename="douban_top250.csv"):
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["电影名称", "评分"])
        writer.writerows(movies)
    print(f"已保存到 {filename}")
```
- 将抓取到的数据写入 CSV 文件，首行为表头。

### 4. 主程序入口
```python
if __name__ == "__main__":
    fetch_douban_top250()
    save_to_csv()
    print("爬取完成！")
```

## 四、运行方法
1. 确保已安装依赖。
2. 在命令行进入脚本所在目录，运行：
```bash
python day21_crawler.py
```
3. 程序运行结束后，会在当前目录生成 `douban_top250.csv` 文件。

## 五、注意事项
- 仅用于学习交流，勿用于商业用途。
- 频繁请求可能导致 IP 被封，建议适当延长 `time.sleep` 时间。
- 豆瓣页面结构若有变动，需相应调整解析代码。

---

如有问题欢迎交流！ 