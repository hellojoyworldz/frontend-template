import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, Globe, MapPin, Play, Presentation, Users } from "lucide-react";
import React from "react";

const speakers = [
  {
    name: "김혁신",
    role: "AI 연구소장",
    company: "테크비전",
    image: "/image.png",
  },
  {
    name: "이미래",
    role: "CTO",
    company: "스타트업허브",
    image: "/image-2.png",
  },
  {
    name: "박창조",
    role: "디자인 디렉터",
    company: "크리에이티브랩",
    image: "/image-3.png",
  },
  {
    name: "최인사이트",
    role: "데이터 사이언티스트",
    company: "데이터웨이브",
    image: "/image-4.png",
  },
];

const stats = [
  {
    icon: <Users className="h-7 w-7" />,
    value: "3,000+",
    label: "참가자",
  },
  {
    icon: <Presentation className="h-7 w-7" />,
    value: "50+",
    label: "세션",
  },
  {
    icon: <Globe className="h-7 w-7" />,
    value: "20+",
    label: "국가",
  },
  {
    icon: <Clock className="h-7 w-7" />,
    value: "3일",
    label: "일정",
  },
];

export default function MainContentSection() {
  return (
    <main className="relative flex-1">
      <section className="relative h-[1200px] w-full bg-[url(/photo-1540575467063-178a50c2df87.png)] bg-cover bg-center">
        <div className="absolute top-0 left-0 h-full w-full bg-[#0a0a0ab2]" />
        <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.8)_100%)]" />

        <div className="absolute top-[397px] left-1/2 w-full max-w-[1376px] -translate-x-1/2 px-8">
          <div className="flex max-w-[654px] flex-col items-start">
            <Badge className="h-auto rounded-full border-[#ffffff1a] bg-[#1a1a1a99] px-[17px] py-[11px] backdrop-blur-[10px]">
              <span className="[font-family:'Outfit-Medium',Helvetica] text-sm leading-5 font-medium tracking-[0] text-[#ff6600]">
                2025년 개최 확정
              </span>
            </Badge>

            <h1 className="mt-[76px] [font-family:'Outfit-Bold',Helvetica] text-[64px] leading-[72px] font-bold tracking-[0] text-neutral-50">
              미래를 <span className="text-[#ff6600]">디자인</span>하다
            </h1>

            <p className="mt-8 [font-family:'Outfit-Regular',Helvetica] text-2xl leading-8 font-normal tracking-[0] text-[#a6a6a6]">
              세계 최고의 혁신가, 기술자, 크리에이터들이 한자리에 모입니다.
              <br />
              당신의 영감을 깨우는 3일간의 여정.
            </p>

            <div className="mt-[94px] flex gap-4">
              <Button className="h-14 rounded-xl bg-[linear-gradient(90deg,rgba(255,102,0,1)_0%,rgba(245,158,11,1)_100%)] px-10 hover:opacity-90">
                <span className="text-center [font-family:'Outfit-SemiBold',Helvetica] text-lg leading-7 font-semibold tracking-[0] text-white">
                  티켓 구매하기
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-14 rounded-xl border-[#2e2e2e80] bg-[#26262666] px-8 backdrop-blur hover:bg-[#26262699]"
              >
                <Play className="mr-3 h-4 w-4 fill-current" />
                <span className="text-center [font-family:'Outfit-Medium',Helvetica] text-lg leading-7 font-medium text-neutral-50">
                  하이라이트 영상
                </span>
              </Button>
            </div>

            <div className="mt-[74px] flex gap-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#a6a6a6]" />
                <span className="[font-family:'Outfit-Regular',Helvetica] text-base leading-6 font-normal tracking-[0] text-[#a6a6a6]">
                  2025년 9월 15일 - 17일
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#a6a6a6]" />
                <span className="[font-family:'Outfit-Regular',Helvetica] text-base leading-6 font-normal tracking-[0] text-[#a6a6a6]">
                  서울 COEX 컨벤션센터
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[1128px] left-1/2 flex h-10 w-6 -translate-x-1/2 justify-center rounded-full border-2 border-[#a6a6a64c]">
          <div className="mt-2.5 h-3 w-1 rounded-full bg-[#ff6600]" />
        </div>
      </section>

      <section className="w-full bg-neutral-950 py-24">
        <div className="mx-auto max-w-[1376px] px-8">
          <div className="mb-[76px] flex items-center justify-between">
            <Badge variant="outline" className="h-auto border-transparent bg-transparent px-6 py-2">
              <span className="[font-family:'Outfit-Bold',Helvetica] text-sm leading-5 font-bold tracking-[0.70px] text-[#ff6600]">
                SPEAKERS
              </span>
            </Badge>

            <Button variant="ghost" className="h-12 gap-2 hover:bg-transparent">
              <span className="text-center [font-family:'Outfit-Medium',Helvetica] text-base leading-6 font-medium tracking-[0] text-neutral-50">
                전체 연사 보기
              </span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <h2 className="mb-[76px] [font-family:'Outfit-Bold',Helvetica] text-5xl leading-[56px] font-bold tracking-[0] text-neutral-50">
            영감을 주는 <span className="text-[#ff6600]">연사들</span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {speakers.map((speaker, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden rounded-2xl border-0 bg-[#121212] transition-transform hover:scale-[1.02]"
              >
                <CardContent className="relative p-0">
                  <div className="relative aspect-[0.75] overflow-hidden">
                    <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover" />
                    <div className="absolute top-0 left-0 h-full w-full bg-[linear-gradient(0deg,rgba(10,10,10,1)_0%,rgba(10,10,10,0.2)_50%,rgba(10,10,10,0)_100%)]" />
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <h3 className="mb-2 [font-family:'Outfit-Bold',Helvetica] text-xl leading-7 font-bold tracking-[0] text-neutral-50">
                      {speaker.name}
                    </h3>
                    <p className="mb-1 [font-family:'Outfit-Medium',Helvetica] text-base leading-6 font-medium tracking-[0] text-[#ff6600]">
                      {speaker.role}
                    </p>
                    <p className="[font-family:'Outfit-Regular',Helvetica] text-sm leading-5 font-normal tracking-[0] text-[#a6a6a6]">
                      {speaker.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#121212] py-24">
        <div className="mx-auto max-w-[1376px] px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-8 h-auto border-transparent bg-transparent px-6 py-2">
                <span className="[font-family:'Outfit-Bold',Helvetica] text-sm leading-5 font-bold tracking-[0.70px] text-[#ff6600]">
                  ABOUT CONFERENCE
                </span>
              </Badge>

              <h2 className="mb-8 [font-family:'Outfit-Bold',Helvetica] text-5xl leading-[56px] font-bold tracking-[0] text-neutral-50">
                기술의 미래를
                <br />
                <span className="text-[#ff6600]">함께 만들어갑니다</span>
              </h2>

              <p className="mb-6 [font-family:'Outfit-Regular',Helvetica] text-lg leading-[29.2px] font-normal tracking-[0] text-[#a6a6a6]">
                CONF 2025는 국내 최대 규모의 기술 컨퍼런스입니다. AI, 웹 기술, 디자인, 스타트업 생태계까지 - 다양한
                분야의 전문가들이 모여 지식을 나누고 네트워크를 형성하는 특별한 기회를 제공합니다.
              </p>

              <p className="[font-family:'Outfit-Regular',Helvetica] text-lg leading-[29.2px] font-normal tracking-[0] text-[#a6a6a6]">
                2020년 첫 개최 이후, 매년 더 큰 규모와 더 깊은 인사이트로 참가자들에게 영감을 선사하고 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="rounded-2xl border-[#ffffff1a] bg-[#1a1a1a99] backdrop-blur-[10px]">
                  <CardContent className="flex flex-col items-center px-6 py-8">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ff660033]">
                      {stat.icon}
                    </div>

                    <div className="mb-2 bg-[linear-gradient(169deg,rgba(255,102,0,1)_0%,rgba(255,171,26,1)_100%)] bg-clip-text text-center [font-family:'Outfit-Bold',Helvetica] text-4xl leading-10 font-bold tracking-[0] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                      {stat.value}
                    </div>

                    <p className="text-center [font-family:'Outfit-Medium',Helvetica] text-base leading-6 font-medium tracking-[0] text-[#a6a6a6]">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-neutral-950 py-24">
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff66000d] blur-[32px]" />

        <div className="relative mx-auto max-w-[1376px] px-8">
          <div className="flex flex-col items-center text-center">
            <Badge className="mb-[69px] h-auto rounded-full border-[#ffffff1a] bg-[#1a1a1a99] px-[17px] py-[11px] backdrop-blur-[10px]">
              <Presentation className="mr-2 h-4 w-4 text-[#ff6600]" />
              <span className="text-center [font-family:'Outfit-Medium',Helvetica] text-sm leading-5 font-medium tracking-[0] text-[#ff6600]">
                Early Bird 할인 진행 중
              </span>
            </Badge>

            <h2 className="mb-8 [font-family:'Outfit-Bold',Helvetica] text-5xl leading-[56px] font-bold tracking-[0] text-neutral-50">
              지금 바로
              <br />
              <span className="text-[#ff6600]">여정을 시작하세요</span>
            </h2>

            <p className="mb-[43px] text-center [font-family:'Outfit-Regular',Helvetica] text-xl leading-7 font-normal tracking-[0] text-[#a6a6a6]">
              Early Bird 티켓은 한정 수량으로 판매됩니다. 최대 40% 할인된 가격으로
              <br />
              CONF 2025를 경험하세요.
            </p>

            <div className="flex gap-4">
              <Button className="h-14 rounded-xl bg-[linear-gradient(90deg,rgba(255,102,0,1)_0%,rgba(245,158,11,1)_100%)] px-10 hover:opacity-90">
                <span className="text-center [font-family:'Outfit-SemiBold',Helvetica] text-lg leading-7 font-semibold tracking-[0] text-white">
                  티켓 구매하기
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button variant="outline" className="h-14 rounded-xl border-[#2e2e2e] px-10 hover:bg-[#2e2e2e33]">
                <span className="text-center [font-family:'Outfit-Medium',Helvetica] text-lg leading-7 font-medium tracking-[0] text-neutral-50">
                  일정 확인하기
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
