import { Card, Flex, Grid, Text, Title } from '@mantine/core'
import EChartsReact from 'echarts-for-react'

export const Home = () => {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Card>
          <Flex direction={'column'}>
            <Text c={'dimmed'}>Ссылки</Text>
            <Title order={3}>28</Title>
          </Flex>
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card>
          <Text c={'dimmed'}>Папки</Text>
          <Title order={3}>3</Title>
        </Card>
      </Grid.Col>
      <Grid.Col span={4}>
        <Card>
          <Text c={'dimmed'}>Теги</Text>
          <Title order={3}>12</Title>
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <Card>
          <EChartsReact
            option={{
              title: {
                text: 'Радар тегов'
              },
              radar: {
                // shape: 'circle',
                indicator: [
                  { name: '#TECH' },
                  { name: '#Важно!' },
                  { name: '#Полезно' },
                  { name: '#Развлечение' },
                  { name: '#Backlog' }
                ]
              },
              series: [
                {
                  name: 'Budget vs spending',
                  type: 'radar',
                  data: [
                    {
                      value: [2, 3, 4, 8, 1, 3],
                      name: 'Allocated Budget'
                    }
                  ]
                }
              ]
            }}
            notMerge={true}
            lazyUpdate={true}
          />
        </Card>
      </Grid.Col>
    </Grid>
  )
}
