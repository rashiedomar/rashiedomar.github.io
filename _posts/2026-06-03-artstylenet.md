---
title: "ArtStyleNet: Finding Similar Artworks with Deep Features"
date: 2026-06-03
permalink: /blog/artstylenet/
excerpt: "A short project writeup on using ResNet features, PCA, and topic-style clustering to explore artistic style similarity across paintings."
tags:
  - COMPUTER VISION
  - DEEP LEARNING
  - VISUALIZATION
author_profile: true
read_time: true
related: false
---

{% include base_path %}

[ArtStyleNet](https://github.com/rashiedomar/ArtStyleNET) is a small computer vision project about a subjective question:

**Can a model find paintings that feel stylistically similar?**

Art recommendation is not the same as object classification. If we classify a painting only by artist name, we miss the softer visual signals that make artworks feel related: color palette, texture, brushstroke density, composition, contrast, and mood. ArtStyleNet explores that space using deep visual features.

![ArtStyleNet preview](/images/blog/artstylenet/preview.png)

## The Dataset

The project uses the Dacon Artist Classification dataset: **5,910 paintings from 51 artists**. The metadata includes artist, genre, nationality, and years, but the main pipeline focuses on images.

That choice is important. The project asks whether visual appearance alone can reveal useful style groupings.

The input is an artwork image:

$$
X \in \mathbb{R}^{H \times W \times 3}
$$

The goal is not only to predict an artist label, but to represent the image in a feature space where stylistic similarity can be compared.

## Feature Extraction

The first step uses a pretrained ResNet50 model as a feature extractor. Instead of training a full model from scratch, the project uses ImageNet-pretrained visual filters and removes the final classification layer.

In simple form:

$$
z = f_{\theta}(X)
$$

where $X$ is the painting and $z$ is the extracted feature vector. This vector is not a human description, but it captures visual patterns learned by the CNN: edges, shapes, textures, color transitions, and higher-level image structure.

For style similarity, this is useful because we can compare two paintings by comparing their feature vectors:

$$
\text{sim}(i,j) =
\frac{z_i^\top z_j}{\|z_i\|_2 \|z_j\|_2}
$$

High similarity means the two images are close in the model's visual representation.

## Reducing the Feature Space

Deep features are high-dimensional, so the project applies PCA before clustering. PCA finds directions of maximum variance:

$$
Z_{\text{PCA}} = ZW_k
$$

where $Z$ is the feature matrix and $W_k$ keeps the top $k$ principal components.

This step makes the feature space easier to model and visualize. It also removes some noise, which matters because artistic style is subtle: the system should not cluster paintings only because of small irrelevant pixel-level differences.

## Clustering Style

After PCA, the project applies LDA-style topic modeling to group artworks into latent visual topics. In text analysis, LDA groups documents by word topics. Here, the same idea is used more creatively: artworks can be treated as having mixtures of latent style components.

For an artwork $i$, the model can assign a topic distribution:

$$
\theta_i = [p(t_1|i), p(t_2|i), \ldots, p(t_K|i)]
$$

The dominant topic is:

$$
t_i^* = \arg\max_k p(t_k|i)
$$

This makes it possible to count how many artworks belong strongly to each topic, inspect representative artworks, and see which artists have more stylistic variability.

## What the Project Shows

The useful part of ArtStyleNet is the pipeline shape:

1. load paintings,
2. extract visual features with ResNet50,
3. reduce dimensions with PCA,
4. discover latent clusters,
5. visualize topic distributions and representative artworks.

This is a good foundation for content-based recommendation. A user may not know the artist or period they want, but they might know the kind of visual feeling they like. A feature-based recommender can start from one artwork and retrieve visually similar ones.

## Limitations

The project is exploratory. ResNet50 was trained on natural images, not art history, so its features are useful but not perfect. PCA is linear, while artistic style may be nonlinear. LDA is also borrowed from topic modeling, so future work could compare it with t-SNE, UMAP, autoencoders, contrastive learning, or CLIP embeddings.

Metadata could also improve the system. Genre, nationality, artist period, and year may help separate true style similarity from accidental visual similarity.

## Conclusion

ArtStyleNet is a compact project, but it asks a good question: how can deep learning help people explore art visually?

The answer is not to replace human taste. The answer is to build a visual search layer: a model that maps paintings into a feature space, groups related works, and helps users discover artworks they may not have found by name or category alone.

You can read the code and fork the project here:

[GitHub: rashiedomar/ArtStyleNET](https://github.com/rashiedomar/ArtStyleNET)
