---
layout: archive
title: "Somali Wikipedia Corpus"
permalink: /data-stories/somali-wikipedia-corpus/
author_profile: true
---

{% include base_path %}

![Somali Wikipedia Corpus preview](/images/data-stories/somali-wikipedia-corpus/preview3.png)

This project prepares Somali Wikipedia as a reusable low-resource NLP corpus. The goal is simple: turn scattered encyclopedia pages into a clean dataset that can be used for language modeling, retrieval, classification, summarization, translation experiments, and Somali-focused AI research.

<span class="page__taxonomy">
  <a href="#data" class="page__taxonomy-item" rel="tag">NLP</a>
  <a href="#dataset" class="page__taxonomy-item" rel="tag">DATASET</a>
  <a href="#cleaning" class="page__taxonomy-item" rel="tag">TEXT DATA</a>
</span>

## Dataset

The corpus contains **9,571 Somali Wikipedia articles** exported into machine-readable formats. The main dataset is a JSONL file with one article per line and three simple fields:

- `title`: article title
- `url`: source Wikipedia page
- `text`: cleaned article text

The current export contains about **2.56 million words** and **18.1 million characters**. The median article length is **128 words**, which reflects the real shape of many low-resource Wikipedia datasets: a mix of short stubs, medium reference articles, and a smaller number of long pages.

## Cleaning

The dataset was built from the official Somali Wikipedia dump dated **2025-09-01**, then a subset of pages was refreshed from the live site on **2025-09-09** when structured information was useful.

The cleaning workflow focused on making the corpus useful without hiding the original source:

1. Extract article text from the Wikimedia dump.
2. Remove wiki markup, templates, metadata noise, and duplicate page versions.
3. Re-fetch selected pages from the live site when tables, infoboxes, lists, captions, categories, or coordinates could be preserved better.
4. Convert tables into Markdown-style text and infoboxes into readable key-value content.
5. Choose the best version of each article by preferring richer structured pages, then longer clean text, then fallback dump text.
6. Export the final dataset as JSONL, a manifest CSV, and one `.txt` file per article.

## Structure

The `manifest.csv` file works as the dataset index. It records each article filename, title, URL, word count, whether tables or infoboxes were preserved, and which source version was selected during merging.

This makes the corpus easier to audit. A researcher can use the JSONL file directly for modeling, then use the manifest to filter short articles, inspect structured pages, or trace examples back to the original source.

## Why It Matters

Somali is a low-resource language in many NLP settings, so reusable cleaned corpora matter. Even a modest Wikipedia corpus can support useful first steps: tokenizer testing, embedding experiments, retrieval datasets, topic classification, summarization baselines, and prompt/evaluation examples for Somali language applications.

The project is also a data preparation story. The value is not only the final file, but the process of turning public web text into structured, documented, downloadable data.

## Limitations

Somali Wikipedia is relatively small and uneven. Some articles are only a few sentences, topic coverage is imbalanced, and complex tables can lose detail when converted into text. The dataset should be treated as a practical research corpus, not a complete representation of Somali language knowledge.

## Downloads

[Download JSONL dataset](/files/data-stories/somali-wikipedia-corpus/somali_wikipedia_corpus.jsonl)  
[Download manifest CSV](/files/data-stories/somali-wikipedia-corpus/manifest.csv)  
[GitHub](https://github.com/rashiedomar/somali-wikipedia-corpus)

Somali Wikipedia content is licensed under CC BY-SA 3.0. Reuse should attribute Wikimedia Foundation contributors and follow the source license.
