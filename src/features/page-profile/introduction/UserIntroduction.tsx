import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { UserIntroduction } from ".";
import { UserIntroductionMock } from "./mock";

export function UserIntroductionComponent(){
    return(
        <>
        <UserIntroduction.SectionTitle
          title='Bio'
          className='mb-4 block sm:hidden'
        />
        <Card className='flex max-w-[862px] flex-col rounded-xl border-[1px] px-4 py-6 sm:px-6 sm:pt-4'>
          <UserIntroduction.UserTitle
            userName={UserIntroductionMock.user.first_name}
            userNickname={UserIntroductionMock.user.nickname}
            userRole={UserIntroductionMock.user.role}
          />
          <Separator className='hidden sm:block' />
          <UserIntroduction.Quote text={UserIntroductionMock.user.info.quote} />
          <UserIntroduction.Section>
            <UserIntroduction.SectionTitle
              title='Bio'
              className='hidden sm:block'
            />
            <UserIntroduction.Bio
              description={UserIntroductionMock.user.info.bio}
            />
          </UserIntroduction.Section>
        </Card>
      </>
    )
}