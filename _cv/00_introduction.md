---
layout: post
title: About Me
---

-----
<!-- <div class="about-me-wrapper" style="display: flex; align-items: flex-start; gap: 2rem; flex-wrap: wrap;"> -->
<div class="about-me-wrapper">

  <!-- Column 1: 사진, 위치, 메일, 링크들 -->
  <div style="flex: 0 0 200px; display: flex; flex-direction: column; align-items: flex-start; gap: 0.5rem;">

    <!-- 사진 -->
    <img src="/assets/profile_image.jpg" alt="Profile photo"
        style="width: 100%; border-radius: 8px; margin-bottom: 0;"
        loading="lazy" data-nosnippet class="no-preview">

    <!-- <img src="/assets/profile_image.jpg" alt="Profile photo" style="width: 100%; border-radius: 8px;" loading="lazy"> -->

    <!-- 위치 -->
    <p style="margin: 0; font-size: 0.98em;">📍 Suwon, South Korea</p>

    <!-- 메일 -->
    <div class="email-wrapper">
      <div class="email-item">
        <span class="email-icon">📧</span>
        <span class="email-text">jiwon24.lee at gmail.com</span>
      </div>
      <div class="email-item">
        <span class="email-icon hidden-icon">📧</span>
        <span class="email-text">jiwon.lee at yonsei.ac.kr</span>
      </div>
    </div>

    <!-- 링크 아이콘 효과 정의: hover & click feedbacks -->
    <style>
      .icon-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
      }
  
      .icon-link img {
      width: 24px;
      transition: transform 0.2s ease, filter 0.2s ease;
      }
  
      .icon-link:hover img {
      transform: scale(1.2);
      }
  
      .icon-link:active img {
      transform: scale(0.95);
      filter: brightness(85%);
      }
  
      .no-preview {
        pointer-events: none;
      }

    </style>

    <!-- 링크 아이콘들 - interaction + 가운데 정렬 -->
    <div class="icon-container" style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-top: 0.0rem; flex-wrap: wrap; width: 100%;">
        <a class="icon-link" href="/assets/cv_jiwon_lee.pdf" target="_blank">
            <img src="/assets/icons-cv-v1.png" alt="CV" style="width: 24px; height: 24px;">
        </a>
        <a class="icon-link" href="https://www.linkedin.com/in/jiwon-lee-bba4a627b/" target="_blank">
            <img src="/assets/icons-linkedin.svg" alt="LinkedIn" style="width: 24px; height: 24px;">
        </a>
        <a class="icon-link" href="https://scholar.google.com/citations?user=MXL5epwAAAAJ&hl=en" target="_blank">
            <img src="/assets/icons-google-scholar-250.svg" alt="Google Scholar" style="width: 24px; height: 24px;">
        </a>
        <a class="icon-link" href="https://orcid.org/0009-0009-6529-5333" target="_blank">
            <img src="/assets/icons-orcid-256.svg" alt="ORCID" style="width: 24px; height: 24px;">
        </a>
    </div>
  </div>

  <!-- Column 2: 자기 소개 -->
  <div style="flex: 1;">
    <p>
      I completed my Ph.D. at Yonsei University under the supervision of Professor Won Woo Ro, with a dissertation titled
      <em>'High-Performance Address Translation Mechanisms for Graphics Processing Units.'</em>
      My research interests span a broad range of topics within computer architecture and systems.
      During my graduate studies, my primary research focus was on designing high-performance address translation methods for GPUs.
      In addition, I co-authored several research papers on topics such as enhancing hashed page tables, designing efficient CPU microarchitectures, improving memory management methods for unified virtual memory in GPUs, multi-GPU systems, and memory expansion modules.
      After gaining industry experience, I will join Uppsala University as a Postdoctoral Researcher starting in Feb. 2026, where I plan to broaden my research beyond my Ph.D. focus.
    </p>
  </div>
  
</div>
