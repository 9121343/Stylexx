import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f2f0f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#141118]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#141118] text-lg font-bold leading-tight tracking-[-0.015em]">StyleXX</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link href="/shop" className="text-[#141118] text-sm font-medium leading-normal">
                Shop
              </Link>
              <a className="text-[#141118] text-sm font-medium leading-normal" href="#">
                Customize
              </a>
              <a className="text-[#141118] text-sm font-medium leading-normal" href="#">
                AI Assistant
              </a>
              <a className="text-[#141118] text-sm font-medium leading-normal" href="#">
                Community
              </a>
            </div>
            <div className="flex gap-2">
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f2f0f4] text-[#141118] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-[#141118]" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f2f0f4] text-[#141118] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-[#141118]" data-icon="User" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                    ></path>
                  </svg>
                </div>
              </button>
              <Link
                href="/cart"
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f2f0f4] text-[#141118] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-[#141118]" data-icon="ShoppingBag" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuANYovW_iRYYDMgJyiQDZAqdG1y7sMryJKyGO-KRtSDAgnk85LdynDyiaKFmR_PWAON9lCkRRM07I-iUd8MputIjPfImUE8ZQyNECoqYQ5ug0Q8s1gGcXNOEn6KY_eltQM2TLMC_HDpVppqdDCjzBN2pLOqeDb7OgzQ5mnHFtX3TGTq_B3CIhmwh1lmNR_PPBHchkSNDzHQoJgjAnld75WHZ6Be1CLVaCYBCNmiXK6Hc-uTaDJK0hWJzuXLNPfZFRCNgSYBKwYbc8M")' }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      StyleXX: Fashion of the Future
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Customize your unique style with our AI-powered design tools. Explore the latest trends and express your individuality.
                    </h2>
                  </div>
                  <Link href="/shop">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#7f13eb] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Shop Now</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="text-[#141118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Video</h2>
            <div className="p-4">
              <div
                className="relative flex items-center justify-center bg-[#141118] bg-cover bg-center aspect-video rounded-xl p-4"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7eDHSkq44V-SXQQ60jpU6yszWhLUDZJf_A2SmtSUfjCNjsiNo7Hpmgx6BfO_P6ZCUnTZQO2OEmJsIu-Qo8KsbKCJH8iA9H3exxu3YLDqnnR5-po88cy78XZSbIchTlHcWnmNBCgr-xpqegwv_aPP_6m65M5_CeW-DmBfPj74Q0jJ3lh5-Pi0etaaSwyFoYU5pIyj397N6XEZUAyPMrhhFs0GRVo8V3FFSxbxBf0xPc1JVOyzN0lr4YkK_NwaTjeo10dILdhwHRdQ")' }}
              >
                <button className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/40 text-white">
                  <div className="text-inherit" data-icon="Play" data-size="24px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <h2 className="text-[#141118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Shop by Gender</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCr-695pofQU3mcgc7M4usyjqrjWtOTXTDED-YqCqpr-ZXgX9SgICnqVH_o6nTdGI-nafo6CB1VX6z-SKf8c6k_iqGYVWaSaAlz6FmvNvid_Xz5bOCbQaP58isu78-XjpR8gFomyRmb2vrcqJzc14mYIuGeSGoxB-LxVmUqcihOaZL4PcigI_nK05BMH0O-TZFZvqrHtHtfPaI5aXBYnuOPk84KTj1zbbmvFEnajCo0t_zOS5-0mvP6z0u9mD1TVvC2LxG9U-UiZa4")' }}
                ></div>
                <p className="text-[#141118] text-base font-medium leading-normal">Men</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0GeeOvBVJ_ANorCiglkXF4M01C8rnq_RQtdJiRcirxrMgdmOSUmoBA3Q6Hy7vKj4nkHUZP4zm2h43tBvKyQecExRblKXPQNCys77U28EeGaeBOT7OsI-rtX3ldVfBm5myvR7EEInm3z5nJ0Y87Y5CU88CNPT71nHJdNvg_7Ti3rkdWY6gEHG1AAHOTEwG7PsSrvlqEt6Dcfvm7y8Lwhwv7kOXDcfWJ-HPhVgjEhhkFbYIECRGjhgV--6IgeJUFt673WlL1x3Rib0")' }}
                ></div>
                <p className="text-[#141118] text-base font-medium leading-normal">Women</p>
              </div>
            </div>
            <h2 className="text-[#141118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">New Arrivals</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCb2miX4xS6b-yskOiFFtRZ3HdJGBDVhuaJgLXZHgteB4nVXIZOjxmD1CNlevzhVW5SakVNVL_5_EFVEX9WXiQ5ubkYacG34CqlKlKCvP0olzkcy4zzEz3GDs6hNeOzgBjhDDpKC3m4YZl7JXOzV-QTWwMKJnmAAcWwkhHKgA7mSGEgIZiU0T2Jr5yOhnIngfzLyaJekMgfWuvf2OPsf5cyhMxxHSUA0Vp9cDrZ7BcipnGnyUTj8OwYy-77mXKyfX9lJhxG9qdyzT0")' }}
                  ></div>
                  <div>
                    <p className="text-[#141118] text-base font-medium leading-normal">Cyberpunk Jacket</p>
                    <p className="text-[#756189] text-sm font-normal leading-normal">Explore the latest in tech-infused fashion.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGkCpmSzOerYrObwCJXtXUVSu8YLkhOuK83mCDRM8hbgKGRX7hndcL9FoZCYTwFHvSc-b5XY_My3nGDgR8ggV8VeldrsIwLJPe7rci7zZOkDY2k1UY1x4B2d_7TtBU6qCloYeDCzbDuYfWCAMXo9zE6E_jT0mOxzT73GT2fss6s2GuO36F_wY4gjd84U0xdtrK3gcBUoYPCbcTxds7Eto0caVRjBrqtZnKYWOVAEp7n473rDltcpH1EkYMLiNzEV85JU2LvIYu5iw")' }}
                  ></div>
                  <div>
                    <p className="text-[#141118] text-base font-medium leading-normal">Techwear Trousers</p>
                    <p className="text-[#756189] text-sm font-normal leading-normal">Durable and stylish for the urban explorer.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAh2voeG5kbwhH4WF6Kj7oFP5I8DM_wKQj5lyoDgYSwExI-TTjVS_rs2dDDILDT1qC8qjzZENSNoTn5nMCsnUwzKAGeL_12johgmCoUCaiGiqdDOMI57GFZp0_b8T_YJHwVdLXu-5d2KMxPFZVAYRO90_hpuqcYtXrUg2uCDB2PydiTLM5HM4FMjiFtr4ww-PRkDcASnuFrK_OuFcRIKjsOdhiGi4xlGN6luG9K9_ADxJQTT5JKsT4EgBH3Tt2PmNrVvs37Ex6DBo4")' }}
                  ></div>
                  <div>
                    <p className="text-[#141118] text-base font-medium leading-normal">Neon Runners</p>
                    <p className="text-[#756189] text-sm font-normal leading-normal">Lightweight and responsive for any terrain.</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#141118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Top Picks</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVnf_v33eKi89SNuH-lYnFRimufV0OmgHrZ7GTfI_XBG3-5jqWTQWC1iuLq8TtqAO0nzvD4xLxOojxBcfy3cFhQUkMmfeFnA8I3ObM-0FFBGl7KySywL-vtCZtC6qApDs9ci4xRRB2NZyGGhbg-75jJMmsZHMFRDhBwSsVU5UA9cCU5ZI0AEDqzjav9Ng9_VJfZqlyeBU-AETb0pYB-9ubGqCR8gTlvzewZ7CFE8ABntLZ2QRpNCZMPfzGO48MB-Ba4P6QEc9K7p4")' }}
                  ></div>
                  <div>
                    <p className="text-[#141118] text-base font-medium leading-normal">Holographic Dress</p>
                    <p className="text-[#756189] text-sm font-normal leading-normal">Shimmering and elegant for any occasion.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB2-12jnvTPDDUneqY8_JrnmadWQdRWRvTq6hJpftvEncw35vSYiJ0rBZa4hrrKHzo9ac_ajYuoWdM4Ud7DQIDUVpW1BQvvIDGc-v0-DdOQvLwvAuVK2GxqbCv4yw_ZeWq8uoFCzz_irxk01S_AsHzgJnXdutZ2K7tRAwgI_H-KoSbJKuwFdtwSVYBdXXHBEsi3Pe8i_yvRV8D5QxWULOnVBiX76FY1bwUCbhj7MX8ZSFlpSjC2BAeRsH-3JSh07X8ENmVPa6MiRgg")' }}
                  ></div>
                  <div>
                    <p className="text-[#141118] text-base font-medium leading-normal">Adaptive Tee</p>
                    <p className="text-[#756189] text-sm font-normal leading-normal">Breathable and form-fitting for ultimate comfort.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKUw_l9FK-baoX5cS0OJjqmd08HLwN9q_AQPCS2ey1g4r8VgUirzP2NF9JjLmnmyfJc0eawbbowCTh3XPEFtDMlwYRvw94k0CqFlwOwmGadqJtxWoDHqDgJkHCXuxKhpAW-eegvGIs7pDLFcL5fzRKiKPahLIE72bVyLv31_tYHWdPqGJfBNNNay2fDfOTh87R7LlHXKc4dwjovzmz4bwEzvySjPekY4-LTbjg4B_mjwLrui7HsO4lMpOoNZJHFXRx6R01sN3054M")' }}
                  ></div>
                  <div>
                    <p className="text-[#141118] text-base font-medium leading-normal">Modular Accessories</p>
                    <p className="text-[#756189] text-sm font-normal leading-normal">Customize your look with interchangeable parts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1
                    className="text-[#141118] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Unleash Your Style with AI
                  </h1>
                  <p className="text-[#141118] text-base font-normal leading-normal max-w-[720px]">
                    Our AI Style Assistant helps you design unique pieces tailored to your preferences. Get started now!
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#7f13eb] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                    >
                      <span className="truncate">Try AI Assistant</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#141118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Customer Testimonials</h2>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
              <div className="flex flex-col gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKVS58aaV5I2k2VmDN_QAVePCipF3nzlMecwink5Tvz1yeHyOirtrXX0ND4tklmvWuWPla4USveBluuc2fwOrG2Q4LYJrpJc3vDXUoJPSj5ztjb3FnNFdkES1XrfN-NIfFgGt35BbREoWr-8usFXCx5XAdaArWqky9cA4NguvFQ4WYuIaYwTq0ifPa3vKqTi3v980YoYJF6lKQClqJza-FwD8YGeuCG3fnev9SmZ151eHISJD9u06iytXOsFrHynXl9AdJMVmMbjU")' }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#141118] text-base font-medium leading-normal">Liam</p>
                    <p className="text-[#756189] text-sm font-normal leading-normal">2 months ago</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[#141118] text-base font-normal leading-normal">
                  StyleXX has completely transformed my wardrobe. The customizable options are endless, and the quality is top-notch. I feel like I'm living in the future!
                </p>
              </div>
              <div className="flex flex-col gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDEBEbUu0aQamKjrSgNss4Ym5IECjHF5b7DY9FZAB2DOBJjdTtIf_qJF9kAPBfD_HFUbgvxeDIhIUp0SmC0Fs7-Qbq98lNq1buHBAKlK4vBQP-gl-3NqUQvHLhapVm32lnJRam5fBg6zrePtyUNm4QXJLIPKgoLRS6X8KriVS1EB6nnYxq5KeJfxEDV-FkYf34bhtEGjlGep4D6fLbCPwyQ-2k_Fr-6mtySoeDFHO21aTaM3qauBwG7QQtuswjl1Bk42fgBiqkeo8")' }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#141118] text-base font-medium leading-normal">Chloe</p>
                    <p className="text-[#756189] text-sm font-normal leading-normal">3 months ago</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#c4bace]" data-icon="Star" data-size="20px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[#141118] text-base font-normal leading-normal">
                  I love the unique designs and the ability to personalize my clothing. The AI assistant is a game-changer, helping me create outfits I never would have imagined.
                </p>
              </div>
              <div className="flex flex-col gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7BocYQtig-1sUPN2Av0r3v8KFGNDWDGPlg33L76wTsIk0YIYV-rWb3W5nX38Yvq2VbgSgQk5CagVsjidqpYJj4bhcM0FDYkP2hfyJq8Jiyel8XNs5VZIglcuL1Pkv9dMh1IaV2UqHuKuhytltpMwPi3QNgLf_T2aZPHtpRXUcUsZwwXKRoeieIR1DNksYxfFVSS3-MvjSXJoiVKW9BecZt6G_cRzhZaXVAexVJ5AZS52jfv0KAu1ahsd9Qk3T_sQpL2Id1Dh7_dU")' }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#141118] text-base font-medium leading-normal">Owen</p>
                    <p className="text-[#756189] text-sm font-normal leading-normal">4 months ago</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-[#141118]" data-icon="Star" data-size="20px" data-weight="fill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="text-[#141118] text-base font-normal leading-normal">
                  The attention to detail and the futuristic aesthetic of StyleXX are unmatched. I always get compliments on my outfits, and I feel confident and stylish.
                </p>
              </div>
            </div>
            <h2 className="text-[#141118] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Community Looks</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdi51hRMZqPJ51nBzwWfo8_NO3UHQht3Xf36tvcrtgCJj8nY8GS65UEa71MjrQrZT8MHWkGI630K5KE8lHK0kc29jPDA180FcQZgPcoQVLq7SjXZfMjaMAJjQoToYeiDISjjk9hMQgjDvDT2LcU0bKiLGqUBIBqnW_22b2UhVSobc29mb9Ms1T8P1yMPvJG05Kp4gJtpY_fO_7Fd11ws11qchX9FZT5HYi1bXlbORmYZxcJIqbDyzA0eXEdBAPWkghWYuUeyyG6Hw")' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFDLGIZlL_A0CmDLRZqjGyUyN1X0VUJ08MTiQwkxztC6kKOaAYm7o8Y5PCR_P9GmtXIEMCglQa5OTXGITQ0gpkXarL4tVvGqqoGe08GAIRq-LHqw8YUNT2DgHWUtIUNYgzfI6867oyzU3tF8en5EI0C2Rv2eFnuRWK7uE6DWGiOn6bxwOMSI8Q5oRMnvmcpLiYDFNSzGxdhMBLJAUXM95djt-lTrqE2Whd3on3POfOFm3Nz-8ELYQgR2CQERcFp4iZgKmmANERvcE")' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5amAgSPVQXTbRt0bETkhATM69JD9Q-G4F594w1nhJKLVUpVp-QLx4FD2m2eKt_uKwYPXHV3qtRqnjQGWUKXJHuos7Jxz-zFUkRQw7Y5e8hF3hSsG4gX58a9itZZURIsfK_l6wOzv02hBHkJPqcEI20o-YkJAI91jS9WbLJMk68Xb_Mc6Tg5qknCAQ7xejjEV14cms8QkU4isp61sKewHXVCt1uqaMI_AtY04mIyQq-jNwrMjURgbdh1YCLhZTvjyRAUk-qjGd1rs")' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIfLKUuQmD5IYH1P53PSbkTK3Qp6ROmeoI07h2qI_gDFdReKLdwWP0jcaiCHFtmkVUs0w-Wuzy28tmgi-KtQ4-6bxuX4sKpWrn0oU28q1kZ-CYydPdDmV0EAejAlePABciTFqiu4-B-vOjKs3mWxfUEJXMRRNMmRLTtsq5NSOyrTIxKLcX0EQUEdmW5QE6SsKOmnDKUjwW82zQrkp0o5P-xGnGqkzEhq4il7sEd7UDZEh-8Nk6sPtwF0xyP0Te-K3x_0Ot0LH3-Ec")' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBo4J5MjT5fBYcp71M35YLqdmcvYzz9BenSgWeklX4u_fDlDz7ZGJYboeFoN1jVduHfLodPpuOjlmG-46OJDgpfX8EgCKen2I7Fe6Gx65Y-uF7f3beunybQb_AZ19lVm6BBwdQYAYD5nF6-JR5NhA5EenKTWGkR5015bsfYPrmRBbNUl7CcAYNPAMejU_ptKb2z9OdF0OIdU8bzeV4K4BP8LN43PWAgSdKSHKugO_tZuuUAi8pumk1FLaX1D0lWuw0NB4rXFU8C2Ic")' }}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA18EL387pDxUunpan_j5q-6XWzBYkTjNPrXe0s9K-Tktsgp52VH5L-sEo67JX2W_K9MdBbQpMOY4-A5ljW7TZZB_q0StR0BwX9-QWbz7qxqbKztwL2oOdH1nohDEhVi8gwNy9eUx0RR4NV55ysijZplu-PXxS9iBmVvK0T-HgUSjl-u3bVrqzz6eNSlbLsis7QkxmE_XCJwAwBNURdAlqgcp8Gdh3tsVWGoRn6eX7g4X0FCmdqjxqW4KYa4K2f_Ab597NSGRrxi8E")' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#756189] text-base font-normal leading-normal min-w-40" href="#">About Us</a>
                <a className="text-[#756189] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                <a className="text-[#756189] text-base font-normal leading-normal min-w-40" href="#">FAQ</a>
                <a className="text-[#756189] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#756189] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#756189]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#756189]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156ZM196,60a12,12,0,1,1-12-12A12,12,0,0,1,196,60Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#756189]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#756189] text-base font-normal leading-normal">@2024 StyleXX. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}