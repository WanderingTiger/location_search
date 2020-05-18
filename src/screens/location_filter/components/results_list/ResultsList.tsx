import React, { ReactElement } from 'react'
import { SectionList, View } from 'react-native'
import { ISearchResultVM, ISectionVM } from '../../LocationFilterVM'
import ResultSection from '../result_section/ResultSection'
import ResultItem from '../result_item/ResultItem'
import styles from './styles'

interface Props {
    data: ISectionVM[]
    onPress?: (sectionIndex: number, index: number) => void
}
const defaultProps: Props = {
    data: [],
}

const ResultsList: React.FC<Props> = ({ data, onPress }: Props): ReactElement => {
    const renderSectionHeader = ({ section: { title } }: { section: ISectionVM }) => (
        <ResultSection title={title} />
    )
    const renderItem = ({
        index,
        item,
        section: { sectionIndex },
    }: {
        index: number
        item: ISearchResultVM
        section: ISectionVM
    }) => {
        return (
            <ResultItem data={item} sectionIndex={sectionIndex} index={index} onPress={onPress} />
        )
    }
    const keyExtractor = ({ id }: ISearchResultVM) => id.toString()
    return (
        <SectionList
            sections={data}
            // @ts-ignore
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            initialNumToRender={5}
            maxToRenderPerBatch={5}
            keyExtractor={keyExtractor}
            stickySectionHeadersEnabled={true}
            keyboardShouldPersistTaps={'always'}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    )
}
ResultsList.defaultProps = defaultProps

export default ResultsList
