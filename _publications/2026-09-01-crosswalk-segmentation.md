---
title: "Data-Efficient Crosswalk Segmentation from Overhead CCTV via Confidence- and Geometry-Guided Pseudo-Labeling"
authors: "Abdirashid Omar, Jonghyuk Park"
collection: publications
order: 4
permalink: /publication/crosswalk-segmentation
tldr: "A data-efficient DeepLabV3-ResNet50 pipeline for overhead-CCTV crosswalk segmentation that reaches 88.91% IoU on 40 held-out, manually labelled images using 241 manual annotations and confidence- and geometry-guided pseudo-label selection from 5,926 unlabelled frames."
date: 2026-09-01
venue: "arXiv preprint, 2026"
preprint: ""
header:
  teaser: "blog/crosswalk-cctv/final-results.png"
links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2609.08914"
    icon: "fas fa-fw fa-file-pdf zoom"
  - label: "Code"
    url: "https://github.com/rashiedomar/crosswalk-cctv"
    icon: "fab fa-fw fa-github zoom"
  - label: "Project note"
    url: "/blog/crosswalk-cctv/"
    icon: "fas fa-fw fa-link zoom"
categories:
  - COMPUTER VISION
  - SEMANTIC SEGMENTATION
  - DOMAIN ADAPTATION
  - PSEUDO-LABELING
  - ARXIV
---

The 88.91% IoU figure is measured on the held-out manually labelled CCTV validation set. The separately reported 98.52% value is an internal second-stage pseudo-label agreement measure, not human-ground-truth validation accuracy.
